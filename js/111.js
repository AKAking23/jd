var first=$(".viewbox li").first().clone()
var last=$(".viewbox li").last().clone()
$(".viewbox").append(first)
$(".viewbox").prepend(last)
var index=1
var len=$(".viewbox li").length
var start
$(".banner").on("touchstart",function(e){
	start=e.touches[0].pageX
	// console.log(start);
})
$(".banner").on("touchend",function(e){
	var end=e.changedTouches[0].pageX
	// console.log(end);
	if(start-end>100){
		index++
		if(index>len-2){
			index=1
			$(".viewbox").css({
				transform:"translateX(0)"
			})
		}
	}else if(start-end<-100){
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