$(document).ready(function() {

var locations = [
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

}); //ready method end