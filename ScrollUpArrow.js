document.addEventListener("DOMContentLoaded",()=>{
	let last_known_scroll_position = 0;
	let ticking = false;
	let displaying = false;
	window.addEventListener('scroll', function(e) {
		last_known_scroll_position = window.scrollY;

		if (!ticking) {
		  window.requestAnimationFrame(function() {
			doSomething(last_known_scroll_position);
			ticking = false;
		  });
	  
		  ticking = true;
		}
	});
	function doSomething(scroll_pos) {
		if(scroll_pos > 100){
			if(displaying === false){
				let d = document.querySelector(".scrolltop")
				fadeIn(d)
				displaying = true;
				console.log("fadeIn");
			}
		} else {
			if(displaying === true){
				let d = document.querySelector(".scrolltop")
				fadeOut(d)
				displaying = false;
				console.log("fadeOut");
			}			
		}
	}
	
	$('.scrolltop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});


const fadeIn = (el, smooth = true, displayStyle = 'block') => {
    el.style.opacity = 0;
    el.style.display = displayStyle;
    if (smooth) {
        let opacity = 0;
        let request;

        const animation = () => {
            el.style.opacity = opacity += 0.04;
            if (opacity >= 1) {
                opacity = 1;
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