export declare class ScrollTop {
    private scrollBase;
    private arrowId;
    private displaying;
    private isDebug;
    private isLoaded;
    private isDomLoadedEventBinded;
    private ticking;
    private scrollEventHandler;
    constructor();
    load(options?: IOptions): void;
    unload(): void;
    setOptions(options?: IOptions): void;
    scrollAnimate(): void;
    scrollToTop(): void;
    insertSymbolHTML(): void;
    fadeInOutByScrollY(scrollY: number): void;
    getScrollY(): number;
    getScrollY_Legacy(): number;
    fadeIn(el: any, _opacity?: number, smooth?: boolean, displayStyle?: string): void;
    fadeOut(el: any, smooth?: boolean, displayStyle?: string): void;
    debugLog(msg: string): void;
}
interface IOptions {
    base: number;
    isDebug: boolean;
}
export {};
