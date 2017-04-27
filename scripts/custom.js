$(document).ready(function(){
	$(".lightbox").lightbox();

	$("#menu li a").click(function() {
		$("#menu li a.current").removeClass("current");
		$(this).addClass("current");			
	});

	$("#sendmessage").click(function() {
		$("#menu li a.current").removeClass("current");
		$("#contact-link").addClass("current");			
	});
});