export class ScrollTop {
    constructor() {
        this.scrollBase = 100;
        this.arrowId = "shScrollTop";
        this.displaying = false;
        this.isDebug = false;
        this.isLoaded = false;
        this.isDomLoadedEventBinded = false;
        this.ticking = false;
    }
    load(options) {
        this.setOptions(options);
        if (this.isLoaded)
            return;
        if (!this.isDomLoadedEventBinded) {
            document.addEventListener("DOMContentLoaded", () => {
                var _a;
                if (typeof requestAnimationFrame !== 'function')
                    return;
                this.insertSymbolHTML();
                this.scrollEventHandler = (e) => this.scrollAnimate();
                window.addEventListener('scroll', this.scrollEventHandler);
                (_a = document.getElementById(this.arrowId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                    this.scrollToTop();
                });
            });
            this.isDomLoadedEventBinded = true;
            this.isLoaded = true;
        }
        else {
            window.addEventListener('scroll', this.scrollEventHandler);
            this.isLoaded = true;
        }
    }
    unload() {
        if (!this.isLoaded)
            return;
        window.removeEventListener('scroll', this.scrollEventHandler);
        this.isLoaded = false;
        const el = document.getElementById(this.arrowId);
        this.fadeOut(el, false);
        this.displaying = false;
    }
    setOptions(options) {
        if (!options)
            return;
        if (options.base) {
            this.scrollBase = options.base;
        }
        if (options.isDebug) {
            this.isDebug = options.isDebug;
        }
    }
    scrollAnimate() {
        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this.fadeInOutByScrollY(this.getScrollY());
                this.ticking = false;
            });
            this.ticking = true;
        }
    }
    scrollToTop() {
        const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
        if (supportsNativeSmoothScroll) {
            this.debugLog('scrollToTop(). behavior smooth.');
            window.scroll({ top: 0, behavior: "smooth" });
        }
        else {
            this.debugLog('scrollToTop(). smoothScroll().');
            const smoothScroll = (h) => {
                const i = h || 0;
                if (i > 10) {
                    setTimeout(() => {
                        window.scrollTo(0, i);
                        smoothScroll(i * 0.9);
                    }, 10);
                }
                else {
                    window.scrollTo(0, 0);
                }
            };
            smoothScroll(this.getScrollY());
        }
    }
    insertSymbolHTML() {
        var _a;
        const html = `<div class="st-scrolltop-wrap"><div id="${this.arrowId}" class="scrolltop" style="display:none">
		<div class="arrow"></div>
	  </div></div>`;
        (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html);
    }
    fadeInOutByScrollY(scrollY) {
        if (typeof scrollY === 'undefined') {
            this.debugLog(`scroll Y : ${scrollY}`);
        }
        else if (this.isDebug) {
            this.debugLog(`scroll Y : ${scrollY}`);
        }
        if (scrollY > this.scrollBase) {
            if (this.displaying === false) {
                const el = document.getElementById(this.arrowId);
                this.fadeIn(el, 0.3);
                this.displaying = true;
            }
        }
        else {
            if (this.displaying === true) {
                const el = document.getElementById(this.arrowId);
                this.fadeOut(el);
                this.displaying = false;
            }
        }
    }
    getScrollY() {
        return window.pageYOffset;
    }
    getScrollY_Legacy() {
        const isSupportPageOffset = window.pageXOffset !== undefined;
        const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        const y = isSupportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        return y;
    }
    fadeIn(el, _opacity = 1, smooth = true, displayStyle = 'block') {
        if (!!!el)
            return;
        el.style.opacity = 0;
        el.style.display = displayStyle;
        if (smooth) {
            let opacity = 0;
            let request;
            const animation = () => {
                opacity += 0.02;
                if (opacity >= _opacity) {
                    opacity = _opacity;
                    cancelAnimationFrame(request);
                }
                el.style.opacity = opacity;
            };
            const rAf = () => {
                request = requestAnimationFrame(rAf);
                animation();
            };
            rAf();
        }
        else {
            el.style.opacity = 1;
        }
    }
    fadeOut(el, smooth = true, displayStyle = 'none') {
        if (!!!el)
            return;
        if (smooth) {
            let opacity = el.style.opacity;
            let request;
            const animation = () => {
                opacity -= 0.04;
                if (opacity <= 0) {
                    opacity = 0;
                    el.style.display = displayStyle;
                    cancelAnimationFrame(request);
                }
                el.style.opacity = opacity;
            };
            const rAf = () => {
                request = requestAnimationFrame(rAf);
                animation();
            };
            rAf();
        }
        else {
            el.style.opacity = 0;
        }
    }
    debugLog(msg) {
        if (this.isDebug)
            console.log('[ScrollTop] ', msg);
    }
}
