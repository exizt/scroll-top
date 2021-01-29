"use strict";

/*! scrollup v1.0.2 */
document.addEventListener("DOMContentLoaded", function () {
  // 스크롤 기준점
  var scroll_base = 100; // selector

  var scrolltopId = "shScrollTop"; // 도형

  drawShape();
  var last_known_scroll_position = 0;
  var ticking = false;
  var displaying = false;
  window.addEventListener('scroll', function (e) {
    last_known_scroll_position = scrollY();

    if (!ticking) {
      window.requestAnimationFrame(function () {
        scrollEvent(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });
  var d = document.getElementById(scrolltopId);
  d.addEventListener('click', function () {
    scrollToTop();
  });
  /**
   * scroll event 에서 fadeIn, fadeOut 설정
   * @param int scroll_pos 
   */

  function scrollEvent(scroll_pos) {
    if (scroll_pos > scroll_base) {
      if (displaying === false) {
        var _d = document.getElementById(scrolltopId);

        fadeIn(_d, 0.3);
        displaying = true; //console.log("fadeIn");
      }
    } else {
      if (displaying === true) {
        var _d2 = document.getElementById(scrolltopId);

        fadeOut(_d2);
        displaying = false; //console.log("fadeOut");
      }
    }
  }
  /**
   * 도형을 draw
   */


  function drawShape() {
    var html = "<div id=\"".concat(scrolltopId, "\" class=\"sh-scrolltop\" style=\"display:none\"><div class=\"sh-arrow\"></div></div>");
    var d = document.querySelector("body");
    d.insertAdjacentHTML('beforeend', html);
  } // https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY


  function scrollY() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    return y;
  } // https://stackoverflow.com/a/48942924


  var scrollToTop = function scrollToTop() {
    //const c = document.documentElement.scrollTop || document.body.scrollTop;
    var c = scrollY();

    if (c > 10) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    } else {
      window.scrollTo(0, 0);
    }
  }; // https://www.ilearnjavascript.com/plainjs-fadein-fadeout/


  var fadeIn = function fadeIn(el) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var smooth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var displayStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'block';
    el.style.opacity = 0;
    el.style.display = displayStyle;

    if (smooth) {
      var c_opacity = 0;
      var request;

      var animation = function animation() {
        el.style.opacity = c_opacity += 0.02;

        if (c_opacity >= opacity) {
          c_opacity = opacity;
          cancelAnimationFrame(request);
        }
      };

      var rAf = function rAf() {
        request = requestAnimationFrame(rAf);
        animation();
      };

      rAf();
    } else {
      el.style.opacity = 1;
    }
  };

  var fadeOut = function fadeOut(el) {
    var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var displayStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';

    if (smooth) {
      var opacity = el.style.opacity;
      var request;

      var animation = function animation() {
        el.style.opacity = opacity -= 0.04;

        if (opacity <= 0) {
          opacity = 0;
          el.style.display = displayStyle;
          cancelAnimationFrame(request);
        }
      };

      var rAf = function rAf() {
        request = requestAnimationFrame(rAf);
        animation();
      };

      rAf();
    } else {
      el.style.opacity = 0;
    }
  };
});