
/*
===================================================================
	carousel
===================================================================
*/

$(function(){
	// 初期設定
	$("#carouselInner ul.column:last").prependTo("#carouselInner");
	$("#carouselInner").css("width",460*$("#carouselInner ul.column").size()+"px");
	$("#carouselInner ul.column:last").prependTo("#carouselInner");
	$("#carouselInner").css("margin-left","-460px");
	
	// イラスト表示
	$("#carouselInner a").click(function(){
		$("#main img").attr("src",$(this).attr("href"));
		return false;
	});
	
	// キャプション表示
	$("#carouselInner img").mouseover(function(){
		$("#caption input").attr("value",$(this).attr("alt"));
		return false;
	});
	
	// 戻るボタン
	$("#carouselPrev").click(function(){
		$("#carouselNext,#carouselPrev").hide();
		$("#pointaInner p:first").appendTo("#pointaInner");
		$("#carouselInner").animate({
			marginLeft : parseInt($("#carouselInner").css("margin-left"))+460+"px"
		},"slow","swing" , 
		function(){
			$("#carouselInner").css("margin-left","-460px")
			$("#carouselInner ul.column:last").prependTo("#carouselInner");
			$("#carouselNext,#carouselPrev").show();
		});
	});
	// 進むボタン
	$("#carouselNext").click(function(){
		$("#carouselNext,#carouselPrev").hide();
		$("#pointaInner p:last").prependTo("#pointaInner");
		$("#carouselInner").animate({
			marginLeft : parseInt($("#carouselInner").css("margin-left"))-460+"px"
		},"slow","swing" , 
		function(){
			$("#carouselInner").css("margin-left","-460px")
			$("#carouselInner ul.column:first").appendTo("#carouselInner");
			$("#carouselNext,#carouselPrev").show();
		});
	});
	
/*
===================================================================
	banner
===================================================================
*/	

	$("div.tooltip").hide();
	$("#banner").mouseover(function(){
		$("div.tooltip").show().css({
			"top":$(this).offset().top-220+"px",
			"left":400+"px"
		});
	}).mouseout(function(){
		$("div.tooltip").hide();
	});
	
});