declare module "scroll-top" {
    /*!
    * exizt/scroll-to-top v4.0.6
    *
    *  License : MIT
    *      Git : https://github.com/exizt/scroll-to-top
    *   Author : EXIzT
    */
    export class ScrollTop {
        private scrollBase;
        private ticking;
        private displaying;
        private arrowId;
        private isDebug;
        constructor();
        /**
         * 화살표 생성 및 이벤트 바인딩 등
         */
        load(): void;
        /**
         * 상단으로 스크롤.
         */
        scrollToTop(): void;
        /**
         * 화살표를 표시하는 html 요소를 추가
         */
        insertArrowHTML(): void;
        /**
         * scroll event 에서 fadeIn, fadeOut 설정
         * @param scrollY 스크롤 Y 좌표
         */
        scrollEvent(scrollY: number): void;
        /**
         * y 좌표를 구함
         * (ie 9 이상. ie에서는 window.pageYOffset을 이용함. 모던브라우저에서는 window.scrollY 또는 window.pageYOffset 이용)
         * https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
         * @returns
         */
        getScrollY(): number;
        /**
         * y 좌표를 구하는 메소드
         * https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY
         * @returns number
         * @deprecated
         */
        getScrollY_Legacy(): number;
        /**
         * fadeIn(천천히 나타남)을 구현하는 메소드
         * https://www.ilearnjavascript.com/plainjs-fadein-fadeout/
         * @param el
         * @param _opacity
         * @param smooth
         * @param displayStyle
         */
        fadeIn(el: any, _opacity?: number, smooth?: boolean, displayStyle?: string): void;
        /**
         * fadeOut(천천히 없어짐)을 구현하는 메소드
         * @param el
         * @param smooth
         * @param displayStyle
         */
        fadeOut(el: any, smooth?: boolean, displayStyle?: string): void;
        /**
         * 디버깅 로그
         * @param msg 디버깅 로그
         */
        debugLog(msg: string): void;
    }
}
