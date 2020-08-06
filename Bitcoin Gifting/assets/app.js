$(function(){
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerheight();
	let scrollPosition = $(window).scrollTop();
	
	$(window).on("scroll", function(){
		
		scrollPos = $(this).scrollTop();
		
		if( scrollPos > introH ) {
			
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
		
		
	});
	
	
	
});