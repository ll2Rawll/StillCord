export default class StillCord {
    constructor(api?: any);
    running: boolean;
    start(): void;
    stop(): void;
    onSwitch(): void;
    openSettings(): void;
    getSettingsPanel(): HTMLElement;
}
