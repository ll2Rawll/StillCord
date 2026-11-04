import type { IpcMainInvokeEvent } from "electron";
import { createBridge } from "./nativeBridge";

const bridge = createBridge();
const observed = new WeakSet<object>();
function owner(event: IpcMainInvokeEvent) {
    const {sender} = event;
    if (!observed.has(sender)) {
        observed.add(sender);
        const id = sender.id;
        sender.once("destroyed", () => bridge.close(id));
    }
    return sender.id;
}
export const weather = (event:IpcMainInvokeEvent,url:string,id:string) => bridge.weather(owner(event),url,id);
export const mediaState = (event:IpcMainInvokeEvent,revision:number,id:string) => bridge.mediaState(owner(event),revision,id);
export const mediaControl = (event:IpcMainInvokeEvent,command:string,id:string) => bridge.mediaControl(owner(event),command,id);
export const cancelRequest = (event:IpcMainInvokeEvent,id:string) => bridge.cancel(owner(event),id);
