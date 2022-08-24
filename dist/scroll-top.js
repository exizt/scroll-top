export class ScrollTop {
    constructor() {
        this.scrollBase = 100;
        this.elementId = "shScrollTop";
        this.displaying = false;
        this.isDebug = false;
        this.isLoaded = false;
        this.isDomLoadedEventBinded = false;
        this.isRunningScrollRaf = false;
    }
    load(options) {
        this.setOptions(options);
        if (this.isLoaded)
            return;
        if (typeof requestAnimationFrame !== 'function')
            return;
        if (typeof window.scrollY === 'undefined')
            return;
        if (!this.isDomLoadedEventBinded) {
            document.addEventListener("DOMContentLoaded", () => {
                var _a;
                this.insertSymbolHTML();
                this.scrollEventHandler = () => this.scrollAnimate();
                window.addEventListener('scroll', this.scrollEventHandler);
                (_a = document.getElementById(this.elementId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
                    this.scrollToTop();
                });
            });
            this.isDomLoadedEventBinded = true;
            this.isLoaded = true;
        }
        else {
            window.addEventListener('scroll', this.scrollEventHandler);
            const el = document.getElementById(this.elementId);
            if (!!el) {
                el.style.display = "block";
            }
            this.isLoaded = true;
        }
    }
    unload() {
        if (!this.isLoaded)
            return;
        window.removeEventListener('scroll', this.scrollEventHandler);
        this.isLoaded = false;
        const el = document.getElementById(this.elementId);
        if (!!el) {
            el.style.opacity = "0";
            el.style.display = "none";
        }
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
        if (this.isRunningScrollRaf) {
            return;
        }
        const run = () => {
            this.fadeInOutByScrollY(this.getScrollY());
            this.isRunningScrollRaf = false;
        };
        this.isRunningScrollRaf = true;
        requestAnimationFrame(run);
    }
    insertSymbolHTML() {
        var _a;
        const html = `<div class="st-scrolltop-wrap"><div id="${this.elementId}" class="st-scrolltop">
        <div class="st-arrow"></div>
      </div></div>`;
        (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html);
    }
    fadeInOutByScrollY(scrollY) {
        if (typeof scrollY === 'undefined') {
            if (this.isDebug) {
                this.debugLog('scroll Y is undefined');
            }
            return;
        }
        if (this.isDebug) {
            this.debugLog('scroll Y : ', scrollY);
        }
        if (scrollY > this.scrollBase) {
            if (this.displaying === false) {
                const el = document.getElementById(this.elementId);
                if (!!el) {
                    el.style.opacity = "0.3";
                }
                this.displaying = true;
            }
        }
        else {
            if (this.displaying === true) {
                const el = document.getElementById(this.elementId);
                if (!!el) {
                    el.style.opacity = "0";
                }
                this.displaying = false;
            }
        }
    }
    getScrollY() {
        return window.scrollY;
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
    debugLog(..._args) {
        if (!this.isDebug)
            return;
        const tag = '[ScrollTop]';
        const args = _args.map((x) => {
            if (typeof x === 'object') {
                return JSON.parse(JSON.stringify(x));
            }
            else {
                return x;
            }
        });
        console.log(tag, ...args);
    }
}
