$(function(){
		//二级菜单
		$('.headerNav span img').click(function(){
			$( ".headerNav .select" ).slideToggle(300);
		});
		var lis=$('.headerNav ul li');
		lis.mouseover(function(){
			$(this).css('background','#007EA3');
		});
		lis.mouseout(function(){
			$(this).css('background','');
		});
		
		
		$('.video>span').mouseover(function(){
			$('.video>span').css({'top':'50%'});
		});
		var wx=null;
		$('.video>span').click(function(){
			if(wx==null){
				$('.video>div').css('opacity','0');
				$('.main2wrapLeft>img').eq(1).css('opacity','1');
				$('.main2wrapLeft>img').eq(0).css('opacity','0');
				wx=1;
			}else{
				$('.video>div').css('opacity','0');
				$('.main2wrapLeft>img').eq(1).css('opacity','0');
				$('.main2wrapLeft>img').eq(0).css('opacity','1');
				wx=null;
			}
		
		});
		$('.main2wrapLeft').mouseleave(function(){
			$('.video>span').css({'margin-top':'60px','margin-left':'32px'});
			$('.video>div').css('opacity','0.5');
		});
});