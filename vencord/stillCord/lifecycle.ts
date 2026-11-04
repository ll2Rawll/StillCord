// Starting can wait for IndexedDB. A disable/re-enable must never resurrect an
// older instance or install duplicate observers after that wait completes.
export class Lifecycle<T extends { start(): void; stop(): void }> {
    private generation = 0;
    current?: T;
    async start(create: () => Promise<T>) {
        const generation = ++this.generation;
        this.current?.stop(); this.current = undefined;
        const instance = await create();
        if (generation !== this.generation) { instance.stop(); return; }
        this.current = instance;
        try { instance.start(); }
        catch (error) { this.current = undefined; instance.stop(); throw error; }
    }
    stop() {
        ++this.generation;
        this.current?.stop(); this.current = undefined;
    }
}
