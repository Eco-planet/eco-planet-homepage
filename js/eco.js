$(function(){
	//nav Ŭ��
	$(".nav li a").click(function(e){ 
		var goPage=$(this).attr("href");
		var topPos=$(goPage).offset().top;
		$("html,body").animate({scrollTop:topPos},800);
	$(".nav li a").removeClass("on");
	e.preventDefault();
	});

	$(".m_nav li a").click(function(e){ 
		var goPage=$(this).attr("href");
		var topPos=$(goPage).offset().top;
		$("html,body").animate({scrollTop:topPos},800);
	$(".m_nav li a").removeClass("on");
	e.preventDefault();
	});

	/* $(".m_navArea li a").click(function(e){ 
		var goPage=$(this).attr("href");
		var topPos=$(goPage).offset().top;
		$("html,body").animate({scrollTop:topPos},800);
	$(".m_navArea li a").removeClass("on");
	e.preventDefault();
	}); */



	$(".logo a").click(function(e){ 
		var goPage=$(this).attr("href");
		var topPos=$(goPage).offset().top;
		$("html,body").animate({scrollTop:topPos},800);
	$("#wrap").removeClass("on");
	e.preventDefault();
	});

$(function(){
	$('.nav li a').click(function(){
	$('.nav li a').removeClass('on');
	$(this).addClass('on'); 
 })
})

$(function(){
	$('.logo a').click(function(){
	$('.nav li a').removeClass('on');
	$(this).addClass('on'); 
 })
})

$(function(){
	$('.m_nav li a').click(function(){
	$('.m_nav li a').removeClass('on');
	$(this).addClass('on'); 
 })
})
//�޴�Ŭ�� �÷�

		$(".prt_box_dv1").mouseover(function(){
		$("#port_box ul .prot_bg1").stop().animate({"opacity":"0.8"},500);
		$(".prt_box_title1").stop().animate({"opacity":"1"},500);
		$(".prt_box_bnt1").stop().animate({"opacity":"1"},500);
	});

		$(".prt_box_dv1").mouseout(function(){
		$("#port_box ul .prot_bg1").stop().animate({"opacity":"0"},500);
		$(".prt_box_title1").stop().animate({"opacity":"0"},500);
		$(".prt_box_bnt1").stop().animate({"opacity":"0"},500);
	});

		$(".prt_box_dv2").mouseover(function(){
		$("#port_box ul .prot_bg2").stop().animate({"opacity":"0.8"},500);
		$(".prt_box_title2").stop().animate({"opacity":"1"},500);
		$(".prt_box_bnt2").stop().animate({"opacity":"1"},500);
	});

		$(".prt_box_dv2").mouseout(function(){
		$("#port_box ul .prot_bg2").stop().animate({"opacity":"0"},500);
		$(".prt_box_title2").stop().animate({"opacity":"0"},500);
		$(".prt_box_bnt2").stop().animate({"opacity":"0"},500);
	});
		$(".prt_box_dv3").mouseover(function(){
		$("#port_box ul .prot_bg3").stop().animate({"opacity":"0.8"},500);
		$(".prt_box_title3").stop().animate({"opacity":"1"},500);
		$(".prt_box_bnt3").stop().animate({"opacity":"1"},500);
	});

		$(".prt_box_dv3").mouseout(function(){
		$("#port_box ul .prot_bg3").stop().animate({"opacity":"0"},500);
		$(".prt_box_title3").stop().animate({"opacity":"0"},500);
		$(".prt_box_bnt3").stop().animate({"opacity":"0"},500);
	});
		$(".prt_box_dv4").mouseover(function(){
		$("#port_box ul .prot_bg4").stop().animate({"opacity":"0.8"},500);
		$(".prt_box_title4").stop().animate({"opacity":"1"},500);
		$(".prt_box_bnt4").stop().animate({"opacity":"1"},500);
	});

		$(".prt_box_dv4").mouseout(function(){
		$("#port_box ul .prot_bg4").stop().animate({"opacity":"0"},500);
		$(".prt_box_title4").stop().animate({"opacity":"0"},500);
		$(".prt_box_bnt4").stop().animate({"opacity":"0"},500);
	});
		$(".prt_box_dv5").mouseover(function(){
		$("#port_box ul .prot_bg5").stop().animate({"opacity":"0.8"},500);
		$(".prt_box_title5").stop().animate({"opacity":"1"},500);
		$(".prt_box_bnt5").stop().animate({"opacity":"1"},500);
	});

		$(".prt_box_dv5").mouseout(function(){
		$("#port_box ul .prot_bg5").stop().animate({"opacity":"0"},500);
		$(".prt_box_title5").stop().animate({"opacity":"0"},500);
		$(".prt_box_bnt5").stop().animate({"opacity":"0"},500);
	});

	$(".prt_box_dv6").mouseover(function(){
		$("#port_box ul .prot_bg6").stop().animate({"opacity":"0.8"},500);
		$(".prt_box_title6").stop().animate({"opacity":"1"},500);
		$(".prt_box_bnt6").stop().animate({"opacity":"1"},500);
	});

		$(".prt_box_dv6").mouseout(function(){
		$("#port_box ul .prot_bg6").stop().animate({"opacity":"0"},500);
		$(".prt_box_title6").stop().animate({"opacity":"0"},500);
		$(".prt_box_bnt6").stop().animate({"opacity":"0"},500);
	});
	

})


