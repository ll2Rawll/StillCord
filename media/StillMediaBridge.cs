// Still / Air: local Windows media-session bridge. No network, polling or files.
// JSON lines on stdout; a fixed set of media commands on stdin. EOF exits.
using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using Windows.Media.Control;

internal static class StillMediaBridge
{
    static GlobalSystemMediaTransportControlsSessionManager manager;
    static GlobalSystemMediaTransportControlsSession session;
    static readonly SemaphoreSlim gate = new SemaphoreSlim(1, 1);
    static readonly JavaScriptSerializer json = new JavaScriptSerializer();
    static readonly object outputGate = new object();
    static Timer debounce;
    static volatile bool stopping;
    static string lastOutput;

    [MTAThread]
    static void Main()
    {
        Console.OutputEncoding = new UTF8Encoding(false);
        try { Run().GetAwaiter().GetResult(); }
        catch { Write(new { available = false, error = "Windows media is unavailable" }); }
        finally { stopping = true; if (debounce != null) debounce.Dispose(); Detach(); }
    }

    static async Task Run()
    {
        manager = await GlobalSystemMediaTransportControlsSessionManager.RequestAsync();
        debounce = new Timer(delegate { Refresh().GetAwaiter().GetResult(); }, null, Timeout.Infinite, Timeout.Infinite);
        manager.CurrentSessionChanged += OnCurrentChanged;
        manager.SessionsChanged += OnSessionsChanged;
        await Refresh();
        string command;
        while ((command = Console.ReadLine()) != null && command != "quit")
        {
            if (command == "refresh") { await Refresh(); continue; }
            if (command != "toggle" && command != "previous" && command != "next") continue;
            await gate.WaitAsync();
            try
            {
                var current = manager.GetCurrentSession();
                if (current == null) continue;
                var info = current.GetPlaybackInfo();
                var controls = info.Controls;
                bool accepted = false;
                if (command == "toggle")
                {
                    if (controls.IsPlayPauseToggleEnabled) accepted = await current.TryTogglePlayPauseAsync();
                    else if (info.PlaybackStatus == GlobalSystemMediaTransportControlsSessionPlaybackStatus.Playing && controls.IsPauseEnabled) accepted = await current.TryPauseAsync();
                    else if (controls.IsPlayEnabled) accepted = await current.TryPlayAsync();
                }
                if (command == "previous" && controls.IsPreviousEnabled) accepted = await current.TrySkipPreviousAsync();
                if (command == "next" && controls.IsNextEnabled) accepted = await current.TrySkipNextAsync();
                if (!accepted) Write(new { commandError = "This player did not accept the control" });
            }
            catch { Write(new { commandError = "The player is no longer available" }); }
            finally { gate.Release(); }
            await Refresh();
        }
        stopping = true;
        manager.CurrentSessionChanged -= OnCurrentChanged;
        manager.SessionsChanged -= OnSessionsChanged;
    }

    static void QueueRefresh()
    {
        if (!stopping && debounce != null) { try { debounce.Change(120, Timeout.Infinite); } catch (ObjectDisposedException) { } }
    }
    static void OnCurrentChanged(GlobalSystemMediaTransportControlsSessionManager sender, CurrentSessionChangedEventArgs args) { QueueRefresh(); }
    static void OnSessionsChanged(GlobalSystemMediaTransportControlsSessionManager sender, SessionsChangedEventArgs args) { QueueRefresh(); }
    static void OnMediaChanged(GlobalSystemMediaTransportControlsSession sender, MediaPropertiesChangedEventArgs args) { QueueRefresh(); }
    static void OnPlaybackChanged(GlobalSystemMediaTransportControlsSession sender, PlaybackInfoChangedEventArgs args) { QueueRefresh(); }

    static void Detach()
    {
        if (session == null) return;
        session.MediaPropertiesChanged -= OnMediaChanged;
        session.PlaybackInfoChanged -= OnPlaybackChanged;
        session = null;
    }

    static async Task Refresh()
    {
        if (stopping || !await gate.WaitAsync(0)) return;
        try
        {
            var current = manager.GetCurrentSession();
            if (!Object.Equals(current, session))
            {
                Detach(); session = current;
                if (session != null) { session.MediaPropertiesChanged += OnMediaChanged; session.PlaybackInfoChanged += OnPlaybackChanged; }
            }
            if (session == null) { Write(new { available = false }); return; }
            var properties = await session.TryGetMediaPropertiesAsync();
            var playback = session.GetPlaybackInfo();
            bool playing = playback.PlaybackStatus == GlobalSystemMediaTransportControlsSessionPlaybackStatus.Playing;
            var controls = playback.Controls;
            Write(new {
                available = true, title = Short(properties.Title), artist = Short(properties.Artist),
                source = Short(session.SourceAppUserModelId), playing = playing,
                canToggle = controls.IsPlayPauseToggleEnabled || (playing ? controls.IsPauseEnabled : controls.IsPlayEnabled),
                canPrevious = controls.IsPreviousEnabled, canNext = controls.IsNextEnabled
            });
        }
        catch { Write(new { available = false, error = "Waiting for a Windows media player" }); }
        finally { gate.Release(); }
    }

    static string Short(string value) { return String.IsNullOrEmpty(value) ? "" : value.Substring(0, Math.Min(value.Length, 300)); }
    static void Write(object value)
    {
        lock (outputGate)
        {
            string line = json.Serialize(value);
            if (line == lastOutput || stopping) return;
            lastOutput = line;
            try { Console.WriteLine(line); Console.Out.Flush(); } catch { stopping = true; }
        }
    }
}
