$(document).ready(function() {
	// alert("hello");

//nav slide toggle
		$("#navBtn").click(function(){

		$("navBtn").click(function(){
			$("nav").slideToggle();
			$(this).toggleClass("navActive");
		}); //click method end


//image hover styles
		$(".gridstyle").hover(function() {
			$(this).find("img").animate({
				"width": "320px",
				"height": "214px",
				"top": "-10px",
				"left": "-10px",
				"opacity" : 0.4
			}); //animate
		}, function() {
			$(this).find("img").animate({
				"width" : "300px",
				"height" : "194px",
				"top" : "0px",
				"left" : "0px",
				"opacity" : 1.0
			}); //animate
		}); //hover


		var clickCount=0;
		var sliderTotal = $("ul.slider-train li").size();
		console.log(sliderTotal);





//product slider
	var clickCount=0;
		var sliderTotal = $("ul.slider-train li").size();
		console.log(sliderTotal);

		function checkArrows(target){
			// console.log(target);

			if (target <= 0) {
				$("#slider-previous").hide();
			} else if ( target > 0 && target < sliderTotal-5) {
				$("#slider-previous").show();
				$("#slider-next").show();
			} else if (target >= sliderTotal-5) {
				$("#slider-next").hide();
			} //conditional end
		} //check arrows end

	checkArrows(clickCount);

	$("#slider-next").click(function(){
		// console.log("slider next!");
		if (clickCount >= sliderTotal-5) { //#images currently visable
			//do nothing
		} else {
			$("ul.slider-train").animate({
				"margin-left" : "-=330"
			}); //animate method end
			clickCount++;
			checkArrows(clickCount);
		} //conditional end

		$("#slider-previous").click(function(){
			// console.log("slider previous");

			if (clickCount <= 0) {
				// do nothing
			} else {
				$("ul.slider-train").animate({
						"margin-left" : "+=330"
				}); //animate method end
				clickCount--;
				checkArrows(clickCount);
			} //end conditional
		});
	}); //click method end 


var photoHeight, headlineHeight, photoTop; //initialize outside the function so it constantly  (variable scope-global variables)

function resizePhotolinks() {
	photoHeight = $(".photolinks").height();
	headlineHeight = $(".photolinks h3").height();
	photoTop = (photoHeight - headlineHeight)/2;
	$(".photolinks h3").css({
		"top" : photoTop

	}); //css


} // resize photolinks

$(window).resize(function () {
		resizePhotolinks();

}); //resize

resizePhotolinks(); //need to put on the outside of the function so it gets called no matter what


}); //get ready method

