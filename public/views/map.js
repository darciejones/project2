
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(38.939986, -77.081140),
        mapTypeID: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

}

function loadScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize';

    document.body.appendChild(script);

    window.onload = loadScript;
}

var pinLocation = new google.maps.LatLng(38.899873, -77.048803);

var startPosition = new google.maps.Marker({
    position: pinLocation,
    map: venueMap,
    icon: "img/go.png"
});
