$(document).ready(function() {
	// alert("hello");

		$("navBtn").click(function(){
			$("nav").slideToggle();
			$(this).toggleClass("navActive");
		}); //click method end

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


});
