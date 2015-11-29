$(document).ready(function() {
	// alert("hello");

//nav slide toggle

$("#navBtn").click(function() {
		$("nav").slideToggle();
		$(this).toggleClass("navActive");
}); //click method end



//image hover styles for product and recipe page
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


		/*var clickCount=0;
		var sliderTotal = $("ul.slider-train li").size();
		console.log(sliderTotal);*/

if($(window).width() >= 980) {  

	$("nav ul li").hover(function() {
		$(this).find("ul").show();
	}, function() {
		$(this).find("ul").hide()
	}); //hover method end
} 

/*if($(window).width() < 980){  
	$("nav ul li").click(function() {
		$(this).find("ul").show();
	}, function() {
		$(this).find("ul").hide()
	}); //hover method end
} doesn't work */

$("nav ul li").click(function() {
		$("nav ul li ul").slideToggle();
		$(this).toggleClass();
}); //click method end


//image hover styles for main page
 if($(window).width() >= 980){  
        // do something

		$(".photolinks").hover(function() {
			$(this).find("img").animate({
				"width" : "320px",
				"height" : "214px",
				"top" : "-10px",
				"left" : "-10px",
				"opacity" : 0.6
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
} // window width if statement



/*var fayLocation = new google.maps.LatLng(43.031101, -76.012660);*/
/*var downLocation = new google.maps.LatLng(43.0470706, -76.1528260);*/
/*function initialize() {*/

//ASK JEFF ABOUT THIS
/*var locations = [
	['Fayetteville Location,', 43.031101, -76.012660],
	['Downtown Location', 43.0470706, -76.1528260]
];

var mapProp = {
  center: new google.maps.LatLng(43.0390858, -76.082743),
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
	};

var map = new google.maps.Map(document.getElementById("map"), mapProp);

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map: map
	});

	google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
}

/*var marker = new google.maps.Marker({
  position:fayLocation,
  });


/*marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

/*$(window).resize(function() {
   if($(window).width() < 500) {
   	$("body").css({
   		"background-color" : "blue"
   	}); //css
   }
});*/

//product slider
	/*var clickCount=0;
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
	}); //click method end */


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


var imageHeight, h1Height, imageTop;

function resizeMainImage() {
	imageHeight = $(".mainimage").height();
	h1Height = $(".mainimage h1").height();
	imageTop = (imageHeight - h1Height)/2;
	$(".mainimage h1").css({
		"top" : imageTop

	}); //css

} //resize main image

$(window).resize(function () {
	resizeMainImage();

	}); //resize

resizeMainImage();









}); //get ready method
