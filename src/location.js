// Only the ZIP code is sent to geocoding; forecasts receive city coordinates.
// A failed lookup never replaces a working location.
function stillLocation(value) {
    if (!value || !/^\d{5}$/.test(value.zip) || !Number.isFinite(value.latitude) || !Number.isFinite(value.longitude)
        || Math.abs(value.latitude) > 90 || Math.abs(value.longitude) > 180 || typeof value.name !== 'string'
        || typeof value.timezone !== 'string') return null;
    try { new Intl.DateTimeFormat('en', {timeZone:value.timezone}).format(); } catch { return null; }
    return {zip:value.zip, name:value.name.slice(0,80), region:String(value.region || '').slice(0,80),
        latitude:value.latitude, longitude:value.longitude, timezone:value.timezone};
}

async function stillResolveZip(api, zip, signal) {
    zip = String(zip).trim();
    if (!/^\d{5}$/.test(zip)) throw new Error('Enter a five-digit US ZIP code.');
    const response = await api.Net.fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${zip}&countryCode=US&count=10&language=en&format=json`,
        {method:'GET',timeout:12000,signal,redirect:'error'});
    if (!response.ok) throw new Error('Location lookup is unavailable. Try again shortly.');
    const data = await response.json();
    const place = data.results?.find(p => p.country_code === 'US' && p.postcodes?.includes(zip));
    const location = place && stillLocation({zip,name:place.name,region:place.admin1,latitude:place.latitude,longitude:place.longitude,timezone:place.timezone});
    if (!location) throw new Error('No location found for that ZIP code. Check it and try again.');
    return location;
}

function stillForecastUrl(location) {
    const params = new URLSearchParams({latitude:String(location.latitude),longitude:String(location.longitude),
        current:'temperature_2m,apparent_temperature,is_day,weather_code',daily:'temperature_2m_max,temperature_2m_min',
        temperature_unit:'celsius',timezone:location.timezone,forecast_days:'1'});
    return `https://api.open-meteo.com/v1/forecast?${params}`;
}
