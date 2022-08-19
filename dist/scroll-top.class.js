define("scroll-top", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /*!
    * exizt/scroll-to-top v3.0.5
    *
    *  License : MIT
    *      Git : https://github.com/exizt/scroll-to-top
    *   Author : EXIzT
    */
    var shScrollToTop = /** @class */ (function () {
        function shScrollToTop() {
            var _this = this;
            this.scrollBase = 100;
            this.ticking = false;
            this.displaying = false;
            this.arrowId = "shScrollTop";
            this.isDebug = true;
            document.addEventListener("DOMContentLoaded", function () {
                _this.load();
            });
        }
        /**
         * 화살표 생성 및 이벤트 바인딩 등
         */
        shScrollToTop.prototype.load = function () {
            var _this = this;
            var _a;
            // requestAnimationFrame은 ie10 이상
            // https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
            if (typeof requestAnimationFrame !== 'function')
                return;
            // 화살표를 draw
            this.insertArrowHTML();
            // scroll 리스너를 등록
            window.addEventListener('scroll', function (e) {
                if (!_this.ticking) {
                    // this.debugLog('scroll event')
                    window.requestAnimationFrame(function () {
                        _this.scrollEvent(_this.getScrollY());
                        _this.ticking = false;
                    });
                    _this.ticking = true;
                }
            });
            // 클릭 이벤트 바인딩
            (_a = document.getElementById(this.arrowId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                _this.scrollToTop();
            });
        };
        /**
         * 상단으로 스크롤.
         */
        shScrollToTop.prototype.scrollToTop = function () {
            // https://stackoverflow.com/questions/52276194/window-scrollto-with-options-not-working-on-microsoft-edge
            var supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
            if (supportsNativeSmoothScroll) {
                ///// 모던 브라우저의 경우
                // https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior
                // behavior는 explorer 에서는 안 됨(ie11 에서도 안 됨)
                this.debugLog('scrollToTop(). behavior smooth.');
                window.scroll({ top: 0, behavior: "smooth" });
            }
            else {
                ///// 예전 브라우저의 경우 (예: ie11)
                // https://stackoverflow.com/questions/15935318/smooth-scroll-to-top/48942924
                // https://stackoverflow.com/questions/42261524/how-to-window-scrollto-with-a-smooth-effect
                this.debugLog('scrollToTop(). smoothScroll().');
                var smoothScroll_1 = function (h) {
                    var i = h || 0;
                    if (i > 10) {
                        setTimeout(function () {
                            window.scrollTo(0, i);
                            smoothScroll_1(i * 0.9);
                        }, 10);
                    }
                    else {
                        window.scrollTo(0, 0);
                    }
                };
                smoothScroll_1(this.getScrollY());
            }
        };
        /**
         * 화살표를 표시하는 html 요소를 추가
         */
        shScrollToTop.prototype.insertArrowHTML = function () {
            var _a;
            var html = "<div class=\"st-scrolltop-wrap\"><div id=\"".concat(this.arrowId, "\" class=\"scrolltop\" style=\"display:none\">\n\t\t<div class=\"arrow\"></div>\n\t  </div></div>");
            (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html);
        };
        /**
         * scroll event 에서 fadeIn, fadeOut 설정
         * @param scrollY 스크롤 Y 좌표
         */
        shScrollToTop.prototype.scrollEvent = function (scrollY) {
            if (typeof scrollY === 'undefined') {
                this.debugLog("scroll Y : ".concat(scrollY));
            }
            if (scrollY > this.scrollBase) {
                if (this.displaying === false) {
                    var el = document.getElementById(this.arrowId);
                    this.fadeIn(el, 0.3);
                    this.displaying = true;
                }
            }
            else {
                if (this.displaying === true) {
                    var el = document.getElementById(this.arrowId);
                    this.fadeOut(el);
                    this.displaying = false;
                }
            }
        };
        /**
         * y 좌표를 구함
         * (ie 9 이상. ie에서는 window.pageYOffset을 이용함. 모던브라우저에서는 window.scrollY 또는 window.pageYOffset 이용)
         * https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
         * @returns
         */
        shScrollToTop.prototype.getScrollY = function () {
            return window.pageYOffset;
            // return window.scrollY
        };
        /**
         * y 좌표를 구하는 메소드
         * https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY
         * @returns number
         * @deprecated
         */
        shScrollToTop.prototype.getScrollY_Legacy = function () {
            var isSupportPageOffset = window.pageXOffset !== undefined;
            var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
            var y = isSupportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
            return y;
        };
        /**
         * fadeIn(천천히 나타남)을 구현하는 메소드
         * https://www.ilearnjavascript.com/plainjs-fadein-fadeout/
         * @param el
         * @param _opacity
         * @param smooth
         * @param displayStyle
         */
        shScrollToTop.prototype.fadeIn = function (el, _opacity, smooth, displayStyle) {
            if (_opacity === void 0) { _opacity = 1; }
            if (smooth === void 0) { smooth = true; }
            if (displayStyle === void 0) { displayStyle = 'block'; }
            if (!!!el)
                return;
            el.style.opacity = 0;
            el.style.display = displayStyle;
            if (smooth) {
                var opacity_1 = 0;
                var request_1;
                var animation_1 = function () {
                    opacity_1 += 0.02;
                    if (opacity_1 >= _opacity) {
                        opacity_1 = _opacity;
                        cancelAnimationFrame(request_1);
                    }
                    el.style.opacity = opacity_1;
                };
                var rAf_1 = function () {
                    request_1 = requestAnimationFrame(rAf_1);
                    animation_1();
                };
                rAf_1();
            }
            else {
                el.style.opacity = 1;
            }
        };
        /**
         * fadeOut(천천히 없어짐)을 구현하는 메소드
         * @param el
         * @param smooth
         * @param displayStyle
         */
        shScrollToTop.prototype.fadeOut = function (el, smooth, displayStyle) {
            if (smooth === void 0) { smooth = true; }
            if (displayStyle === void 0) { displayStyle = 'none'; }
            if (!!!el)
                return;
            if (smooth) {
                var opacity_2 = el.style.opacity;
                var request_2;
                var animation_2 = function () {
                    opacity_2 -= 0.04;
                    if (opacity_2 <= 0) {
                        opacity_2 = 0;
                        el.style.display = displayStyle;
                        cancelAnimationFrame(request_2);
                    }
                    el.style.opacity = opacity_2;
                };
                var rAf_2 = function () {
                    request_2 = requestAnimationFrame(rAf_2);
                    animation_2();
                };
                rAf_2();
            }
            else {
                el.style.opacity = 0;
            }
        };
        /**
         * 디버깅 로그
         * @param msg 디버깅 로그
         */
        shScrollToTop.prototype.debugLog = function (msg) {
            if (this.isDebug)
                console.log('[ScrollTop] ', msg);
        };
        return shScrollToTop;
    }());
    exports["default"] = shScrollToTop;
});
