/*! 
* exizt/scroll-to-top v2.0.0 
* Licensed under MIT
*/
import './css/scroll-to-top.css';
document.addEventListener("DOMContentLoaded",()=>{
	
	// 아이콘이 생기는 기준점
	const scroll_base = 100

	// selector
	const scrolltopId = "shScrollTop"

	const isDebug = true

	// 도형
	drawShape()

	let ticking = false
	let displaying = false
	window.addEventListener('scroll', (e)=>{
		if(typeof requestAnimationFrame !== 'function') return
				
		let last_known_scroll_position = scrollY();

		if (!ticking) {
		  window.requestAnimationFrame(()=>{
			scrollEvent(last_known_scroll_position);
			ticking = false;
		  });
	  
		  ticking = true;
		}
	});

	document.getElementById(scrolltopId).addEventListener('click',()=>{
		// https://stackoverflow.com/questions/15935318/smooth-scroll-to-top/48942924
		// https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior
		// behavior는 explorer 에서는 안 됨
		window.scrollTo({top:0, behavior: "smooth"})
	})

	/**
	 * 도형을 draw
	 */
	function drawShape(){
		let html = `<div id="${scrolltopId}" class="sh-scrolltop" style="display:none"><div class="sh-arrow"></div></div>`
		let d = document.querySelector("body")
		d.insertAdjacentHTML('beforeend', html);
	}

	/**
	 * scroll event 에서 fadeIn, fadeOut 설정
	 * @param int scroll_pos 
	 */
	function scrollEvent(scroll_pos) {
		if(scroll_pos > scroll_base){
			if(displaying === false){
				let d = document.getElementById(scrolltopId)
				fadeIn(d, 0.3)
				displaying = true;
				//console.log("fadeIn");
			}
		} else {
			if(displaying === true){
				let d = document.getElementById(scrolltopId)
				fadeOut(d)
				displaying = false;
				//console.log("fadeOut");
			}			
		}
	}

	// https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY
	function scrollY(){
		let supportPageOffset = window.pageXOffset !== undefined;
		let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
		let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
		return y;

	}

	// https://www.ilearnjavascript.com/plainjs-fadein-fadeout/
	const fadeIn = (el, opacity = 1, smooth = true, displayStyle = 'block') => {
		el.style.opacity = 0;
		el.style.display = displayStyle;
		if (smooth) {
			let c_opacity = 0;
			let request;
	
			const animation = () => {
				el.style.opacity = c_opacity += 0.02;
				if (c_opacity >= opacity) {
					c_opacity = opacity;
					cancelAnimationFrame(request);
				}
			};
	
			const rAf = () => {
				request = requestAnimationFrame(rAf);
				animation();
			};
			rAf();
	
		} else {
			el.style.opacity = 1;
		}
	};
	
	const fadeOut = (el, smooth = true, displayStyle = 'none') => {
		if (smooth) {
			let opacity = el.style.opacity;
			let request;
	
			const animation = () => {
				el.style.opacity = opacity -= 0.04;
				if (opacity <= 0) {
					opacity = 0;
					el.style.display = displayStyle;
					cancelAnimationFrame(request);
				}
			};
	
			const rAf = () => {
					request = requestAnimationFrame(rAf);
					animation();
			};
			rAf();
	
		} else {
			el.style.opacity = 0;
		}
	};
});

