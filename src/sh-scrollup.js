/*! scrollup v1.0.0 */
document.addEventListener("DOMContentLoaded",()=>{
	
	// 스크롤 기준점
	const scroll_base = 100
	// selector
	const scrolltopId = "shScrollTop"

	// 도형
	drawShape()
	let last_known_scroll_position = 0
	let ticking = false
	let displaying = false
	window.addEventListener('scroll', (e)=>{
		last_known_scroll_position = scrollY();

		if (!ticking) {
		  window.requestAnimationFrame(()=>{
			scrollEvent(last_known_scroll_position);
			ticking = false;
		  });
	  
		  ticking = true;
		}
	});

	let d = document.getElementById(scrolltopId)
	d.addEventListener('click',()=>{
		scrollToTop()
	})

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

	/**
	 * 도형을 draw
	 */
	function drawShape(){
		let html = `<div id="${scrolltopId}" class="sh-scrolltop" style="display:none"><div class="sh-arrow"></div></div>`
		let d = document.querySelector("body")
		d.insertAdjacentHTML('beforeend', html);
	}

	// https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY
	function scrollY(){
		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
		var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

		return y;
	}

	// https://stackoverflow.com/a/48942924
	const scrollToTop = () => {
		//const c = document.documentElement.scrollTop || document.body.scrollTop;
		const c = scrollY()

		if (c > 10) {
		  window.requestAnimationFrame(scrollToTop);
		  window.scrollTo(0, c - c / 8);
		} else {
			window.scrollTo(0, 0);
		}
	  };

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

