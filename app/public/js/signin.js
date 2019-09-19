$("#my-4").on("click", function (event) {
    event.preventDefault();
  
      var email = $("#inputEmail").val().trim();
      var password = $("#inputPassword").val().trim();

    if (email === "" || password === "") {
      alert("Please enter a valid username and password");
        }
    else {
      var userLogin = {
        email: $("#inputEmail").val().trim(),
        password: $("#inputPassword").val().trim(),
  
  
      };
      console.log(userLogin);
  
      $("#inputEmail").val("");
      $("#inputPassword").val("");
  
      window.location.assign("/all");
    }});