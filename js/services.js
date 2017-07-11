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
});