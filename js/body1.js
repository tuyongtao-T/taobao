$(function() {
	function topPPT() {
		var index = 0;
		var timer;
		var len = $("#changeImg1 li").length;

		function slideTo(index) {
			$("#changeImg1 li").eq(index).fadeIn().siblings().fadeOut();
			$("#circle li").eq(index).css({
					background: "#ff5000"
				})
				.siblings().css({
					background: "white"
				});
		}

		slideTo(index);

		function auto() {
			timer = setInterval(function() {
				index++;
				if(index === len) {
					index = 0;
				}
				slideTo(index);
			}, 2300);
		}
		auto();

		$("#next").click(function() {
			clearInterval(timer);
			index++;
			if(index === len) {
				index = 0;
			}
			slideTo(index);
			auto();
		})

		$("#prev").click(function() {
			clearInterval(timer);
			index--;
			if(index === -1) {
				index = len;
			}
			slideTo(index);
			auto();
		})
		//序号轮播
		$("#circle li").click(function() {
			clearInterval(timer);
			var index = $(this).index();
			slideTo(index);
			auto();
		});
		//鼠标悬浮 停止
		$(".changeImg1 li").mouseover(function() {
			clearInterval(timer);
		});
		$(".changeImg1 li").mouseout(function() {
			auto();
		});
	}
	topPPT();	
		
	function botPPT () {
		var index = 0;
		var timer;
		var len = $(".tmal-nav li").length;
		function slideTo (index) {
			$(".ppt-bom li").eq(index).fadeIn().siblings().fadeOut();
			$(".tmal-nav li").eq(index).css({
					background: "black"
				})
				.siblings().css({
					background: "#FF1648"
				});
			$(".midrank").text((index+1));
		}
		
		slideTo(index);
		function auto() {
			timer = setInterval(function() {
				index++;
				if(index === len) {
					index = 0;
				}
				slideTo(index);
			}, 3000);
		}
		auto();
		
		$("#next1").click(function(){
			clearInterval(timer);
			index++;
			if(index === len){
				index = 0;
			}
			slideTo(index);
			auto();
		})
		
		$("#prev1").click(function(){
			clearInterval(timer);
			index--;
			if(index === -1){
				index = len;
			}
			slideTo(index);
			auto();
		})
		//序号轮播
		$(".tmal-nav li").click(function() {
			clearInterval(timer);
			var index = $(this).index();
			slideTo(index);
			auto();
		});
		//鼠标悬浮 停止
		$(".ppt-bom li").mouseover(function() {
			clearInterval(timer);
		});
		$(".ppt-bom li").mouseout(function() {
			auto();
		});
	}	
	botPPT ();	
		
		
		
		
		
		
})