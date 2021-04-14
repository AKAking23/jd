// 轮播
$(function(){
	var index=1
	var first=$(".viewbox li").first().clone()
	var last=$(".viewbox li").last().clone()
	$(".viewbox").append(first)
	$(".viewbox").prepend(last)
	var len=$(".viewbox li").length//viewbox li的长度
	var start//保存手指按下的坐标
	 var w//保存的是当前轮播的每个图片的宽度,因为rem布局宽度使用rem是不固定的
	$(".banner").on("touchstart",function(e){
		start=e.touches[0].pageX//手指按下的坐标
		// console.log(start);
		w=parseFloat($(".banner li").css("width"))
		// console.log(w);
	})
	
	$(".banner").on("touchend",function(e){
		var end=e.changedTouches[0].pageX//手指抬起的坐标
		// console.log(end);
		if(start-end>w/8){//如果大于100 前一张
			index++
			if(index>len-2){
				index=1
				$(".viewbox").css({
					transform:"translateX(0)"
				})
			}
		}else if(start-end<-w/8){//手指滑动的距离大于轮播图三分之一的宽度时候执行切换
			index--
			if(index<1){
				index=len-2
				$(".viewbox").css({
					transform:"translateX("+(-6.3*(len-1))+"rem)"
				})
			}
		}
		$(".viewbox").animate({transform:"translateX("+(-6.3*index)+"rem)"},500)
		$(".pagination span").eq(index-1).addClass("active").siblings().removeClass("active")
	})
})
// 
$(function(){
	var index=0
	var start
	var w
	$(".icon-swiper").on("touchstart",function(e){
		start=e.touches[0].pageX
		w=parseFloat($(".icon-viewbox ul").css("width"))
		// console.log(start);
	})
	$(".icon-swiper").on("touchend",function(e){
		var end=e.changedTouches[0].pageX
		// console.log(end);
		if(start-end>w/5){
			index=1
			$(".icon-viewbox").animate({
				transform:"translateX("+(-6.1)+"rem)"
			},500)
		}else if(start-end<w/5){
			index=0
			$(".icon-viewbox").animate({
				transform:"translateX(0)"
			},500)
		}
		$(".icon-pagination span").eq(index).addClass("active").siblings().removeClass("active")
	})
})
// 渲染
$.get("js/product.json",function(res){
	$.each(res,function(index,item){
		var el=$(`<div class="product-item">
					<a href="detail.html?pid=${item.pid}">
						<div class="item-img">
							<img src="${item.imgSrc}" >
						</div>
						<div class="item-intr">
							<h3>${item.title}</h3>
							<p>￥${item.price}</p>
						</div>
					</a>
				</div>`)
	$(".guess").append(el)
	})
})