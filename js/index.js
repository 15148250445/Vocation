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
		//动画图1
		var i=0;
		var li=$('.pptContainer li');
		setInterval(function(){
			i++;
			if(i==2){
				i=-1;
			}
			li.eq(i).siblings().animate({
				'opacity':'0'
			},400);
			li.eq(i).stop().animate({
				'opacity':'1'
			},400);
		},4000);
		//动画图2
			var j=0;
			setInterval(function(){
				j++;
				if(j==3){
					j=1;
				}
				if(j==1){
					$('.ppt2Box').animate({'left':-872},1000);
				}else{
					$('.ppt2Box').animate({'left':0},1000);
				}
			},4000);
		
	});