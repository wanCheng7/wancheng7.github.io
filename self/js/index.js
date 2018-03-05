/* 首页js */ 
$(document).ready( function() {
	// 全屏翻页
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4'],
    menu: '#myMenu',
    slidesColor: ['#212325', '#fff', '#212325', '#ebfbff'],  //每一屏背景色
    scrollingSpeed: 500,  //滚动速度
    controlArrowColor: 'rgba(255,255,255,.5)',  //左右滑块背景色
    // slidesNavigation: true,  //是否显示左右滑块的项目导航
    // loopBottom: true,  //滚动到最底部后是否滚回顶部
    // loopTop: true,  //滚动到最顶部后是否滚底部
    afterRender: function () {  //生成页面时的回调函数
    	$('#fullpage').find('.active').addClass('focus');
    },
    afterLoad: function (anchorLink, index) { //滚动到某一屏的回调函数
    	$('#fullpage').children().eq(index-1).addClass('focus');
    },
    onLeave: function (index, nextIndex, direction) { //滚动前
    	$('#fullpage').children('.focus').removeClass('focus');
    } 
	});

	// 案例作品保持脱线宽高比
	var widthHeightFn = function ($obj) {
		var width_ = $obj.width();
		$obj.height(width_ * 2 /3);
	}
	widthHeightFn($('.case_img_box'));

	// 案例作品查看原图初始化
	$('.case_img_box img').zoomify().on({
		'zoom-in.zoomify': function() {
      $(this).parents('.case_item').addClass('selected');
    },
    'zoom-in-complete.zoomify': function() {  //放大完成
    	$(this).parents('.case_item').addClass('selected');
    },
    'zoom-out-complete.zoomify': function() {  //缩小完成
     	$(this).parents('.case_item').removeClass('selected');
    },
	})
	// 展示微信二维码
	$('#showWechat').click(function() {
		$('#wechat_img').animate({'opacity':1, 'left': '50%'}, 500);
		$('#page_bg').show();
	});
	$('#page_bg, #wechat_img').click(function() {
		$('#page_bg').hide();
		$('#wechat_img').animate({'opacity':0, 'left': 0}, 500);
	});



})