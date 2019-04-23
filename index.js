$_$wp(1);
if ($_$w(1, 0), navigator.geolocation) {
    $_$w(1, 1), navigator.geolocation.getCurrentPosition(function (position) {
        $_$wf(1);
        $_$w(1, 2), initialize(position.coords.latitude.position.coords.longitude);
    });
}
function initialize(lat, lng) {
    $_$wf(1);
    var latlng = ($_$w(1, 3), new google.maps.LatLng(lat, lng));
    $_$w(1, 4), getLocation(latlng);
}
function getLocation(latlng) {
    $_$wf(1);
    var geocoder = ($_$w(1, 5), new google.maps.geocoder());
    $_$w(1, 6), geocoder.geocode(`LatLng`);
}
$_$wpe(1);