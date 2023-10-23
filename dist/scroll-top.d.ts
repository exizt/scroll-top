export declare class ScrollTop {
    private scrollBase;
    private elementId;
    private displaying;
    private isDebug;
    private isLoaded;
    private hasDomEventBinding;
    private isRunningScrollRaf;
    private scrollEventHandler;
    constructor();
    load(options?: IOptions): void;
    unload(): void;
    private setOptions;
    private scrollAnimate;
    private appendSymbolToHTML;
    private fadeInOutByScrollY;
    private getScrollY;
    private isSupported;
    private scrollToTop;
    private debugLog;
}
interface IOptions {
    base: number;
    isDebug: boolean;
}
export {};
