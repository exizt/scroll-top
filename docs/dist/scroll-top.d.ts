export declare class ScrollTop {
    private scrollBase;
    private elementId;
    private displaying;
    private isDebug;
    private isLoaded;
    private isDomLoadedEventBinded;
    private isRunningScrollRaf;
    private scrollEventHandler;
    constructor();
    load(options?: IOptions): void;
    unload(): void;
    private setOptions;
    private scrollAnimate;
    private insertSymbolHTML;
    private fadeInOutByScrollY;
    private getScrollY;
    private scrollToTop;
    private debugLog;
}
interface IOptions {
    base: number;
    isDebug: boolean;
}
export {};
