$(document).ready(function(){
	$("body").append('<div id="shScrollTop" class="sh-scrolltop"><div class="sh-arrow"></div></div>');
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#shScrollTop').fadeIn();
		} else {
			$('#shScrollTop').fadeOut();
		}
	});
	
	$('#shScrollTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});