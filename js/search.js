$(function() {
	$(".b-click").click(function(){
		$(this).addClass("b-active")
		.siblings().removeClass("b-active");
	})
	$(".left-search input").click(function(){
		$("#sou").css({display: 'none'});
	})
	
	
	
	
	
	
})
