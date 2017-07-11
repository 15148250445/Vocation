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
		//引用插件
		$('#mainBoxUl>li').each( function(){$(this).hoverdir();});
		//手动轮播图
		//给每个图片加点击事件
			$('#mainBoxUl>li').click(function(){
				//给点击的当前li编号
				var num=$(this).index();
				$('#pop').fadeIn(500);
				setTimeout(function(){
					$('#popAlt').show();
					$('#popAlt').html('| '+(num+1)+'/9');
					$('#popContent').fadeIn(500);
					$('#popContainer>img').eq(num).fadeIn(500).siblings().hide();
				},1000);
				//判断控制左右按钮出现
				if(num==0){
					$('#popLeftBtn').hide();
				}else{
					$('#popLeftBtn').show();
				}
				if(num==8){
					$('#popRightBtn').hide();
				}else{
					$('#popRightBtn').show();
				};	
				//点击有按钮播放下一张
				$('#popRightBtn').click(function(){
				num+=1;
				console.log(num);
				if(num==0){
					$('#popLeftBtn').hide();
				}else{
					$('#popLeftBtn').show();
				};
				if(num==8){
					$('#popRightBtn').hide();
				}else{
					$('#popRightBtn').show();
				};	
					$('#popAlt').hide();
					$('#popContainer>img').eq(num-1).fadeOut(500);
					setTimeout(function(){
						$('#popContainer>img').eq(num).fadeIn(500).siblings().hide();
						$('#popAlt').show();
						$('#popAlt').html('| '+(num+1)+'/9');
						
					},1000);
					
				});
				//点击有按钮播放上一张
				$('#popLeftBtn').click(function(){
				num-=1;
				console.log(num);
				if(num==0){
					$('#popLeftBtn').hide();
				}else{
					$('#popLeftBtn').show();
				};
				if(num==8){
					$('#popRightBtn').hide();
				}else{
					$('#popRightBtn').show();
				};
					$('#popAlt').hide();
					$('#popContainer>img').eq(num+1).fadeOut(500);
					setTimeout(function(){
						$('#popContainer>img').eq(num).fadeIn(500).siblings().hide();
						$('#popAlt').show();
						$('#popAlt').html('| '+(num+1)+'/9');	
					
					},1000);
				});
				//点击遮罩层或close关闭
				$('#popClose,#pop').click(function(){
					$('#pop').fadeOut(500);
					$('#popContent').fadeOut();
				});
			});
			
			
			
	
});
	//闭包
	/*function f1(){
　　　　n=999;
　　　　function f2(){
　　　　　　alert(n);
　　　　}
　　　　return f2;
　　}
　　var result=f1();
　　result(); */

