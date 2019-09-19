//Click The Request Button to create a product request
$("#my-5").on("click", function (event) {
  event.preventDefault();

// Code here handles how the page displays all of the products
// It pings the server. The server then pings the database and displays all of the products.


var myLatLng = { lat: , lng:  };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};





//define calcRoute function
function calcRoute() {
  //create request
  var request = {
      origin: document.getElementById("from").value,
      destination: document.getElementById("to").value,
      travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
      unitSystem: google.maps.UnitSystem.IMPERIAL
  }

  //pass the request to the route method
  directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {

          //Get distance and time
          $("#output").html("<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance: " + result.routes[0].legs[0].distance.text + ".<br />Duration: " + result.routes[0].legs[0].duration.text + ".</div>");

          //display route
          directionsDisplay.setDirections(result);
      } else {
          //delete route from map
          directionsDisplay.setDirections({ routes: [] });
          //center map in London
          map.setCenter(myLatLng);

          //show error message
          $("#output").html("<div class='alert-danger'>Could not retrieve driving distance.</div>");
      }
  });

}



//create autocomplete objects for all inputs
var options = {
  types: ['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);






// make a get request to our api to grab every product        Does this need to be api/all? 
$.get("/api", function(data) {

  // for each product that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "product-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);

    // Now add all of our product data to the well we just placed on the page

    // make the name an h2,
    $("#product-well-" + i).append("<h2>" + data[i].name + "</h2>");
    // the role an h3,
    $("#product-well-" + i).append("<h3>Product: " + data[i].product + "</h4>");
    // the age an h3,
    $("#product-well-" + i).append("<h3>City: " + data[i].city + "</h4>");
    // and the forcepoints an h3.
    $("#product-well-" + i).append("<h3>Zip Code: " + data[i].zipCode + "</h4>");
  }
});
