// Code here handles what happens when a user submits a new product on the form.
// Takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function (event) {
  event.preventDefault();

  var name = $("#name").val().trim();
  var product = $("#product").val().trim();

  if (name === "" || product === "") {
    alert("Please add your name and a product");
  }
  else {
    // make a product obj
    var newProduct = {
      yourName: $("#name").val().trim(),
      product: $("#product").val().trim(),
    };
    console.log(newProduct);
    alert("New product added");

    var parseUser = {
      name: $("#name").val().trim(),
      product: $("#product").val().trim(),
     
    };

    // send an AJAX POST-request with jQuery
    $.post("/api/new", newProduct)
      // on success, run this callback
      .then(function (data) {
        // log the data we found
        console.log(data);
        alert("Adding product...");

      });

    $.post("/all", parseUser)
      .then(function (data) {
        console.log(data)
      });

    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#product").val("");
    $("#city").val("");
    $("#zipCode").val("");

    }
  });


// // when user clicks sign-up btn
// $("#sign-up").on("click", function(event) {
//   event.preventDefault();

// //make a user info obj
// var newUser = {
//   userName: $("#userName").val().trim(),
//   address: $("#address").val().trim(),
// };

// console.log(newUser);

//   // send an AJAX POST-request with jQuery
//   $.post("/api/newUser", newUser)
//     // on success, run this callback
//     .then(function(data) {
//       // log the data we found
//       alert("Adding new user to db");
//       console.log(data);

//       $("#userName").val("");
//       $("#address").val("");
//     });
//   });
