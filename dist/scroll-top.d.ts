export declare class ScrollTop {
    private scrollBase;
    private ticking;
    private displaying;
    private arrowId;
    private isDebug;
    constructor();
    load(): void;
    scrollToTop(): void;
    insertArrowHTML(): void;
    scrollEvent(scrollY: number): void;
    getScrollY(): number;
    getScrollY_Legacy(): number;
    fadeIn(el: any, _opacity?: number, smooth?: boolean, displayStyle?: string): void;
    fadeOut(el: any, smooth?: boolean, displayStyle?: string): void;
    debugLog(msg: string): void;
}
