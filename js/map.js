$(document).ready(function() {

var locations = [
	['Fayetteville Location,', 43.031101, -76.012660, "https://www.google.com/maps/dir//Olive+On+Brooklea,+205+Brooklea+Dr,+Fayetteville,+NY+13066,+United+States/@43.0311357,-76.0148305,17z/data=!4m13!1m4!3m3!1s0x89d98c3923f72f73:0xec95b122b871f032!2sOlive+On+Brooklea!3b1!4m7!1m0!1m5!1m1!1s0x89d98c3923f72f73:0xec95b122b871f032!2m2!1d-76.0126418!2d43.0311357"],
	['Downtown Location', 43.0470706, -76.1528260, "https://www.google.com/maps/dir//116+W+Jefferson+St,+Syracuse,+NY+13202/@43.0470646,-76.1572035,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89d9f3bf2fb74637:0xfb9c0f28996f039!2m2!1d-76.1528261!2d43.0470568"],
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
		map: map,
	});

	google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
				//alert("boom");
				var urlTarget = locations[i][3];
				//alert(urlTarget);
				// window.location.href = urlTarget;
				window.open(urlTarget,'_blank');
			} //return
	})(marker,i));
} // for loop

}); //ready method end
