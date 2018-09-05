// // Get references to page elements
var $loginBtn = $("#login");
var $signUpBtn = $("#signUp");

// // The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(data) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/register",
      data: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name
      })
    });
  },
  loginUser: function(data) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/authentication",
      data: JSON.stringify({ email: data.email, password: data.password })
    });
  }
};

// handleLogin gets login information from the db
var handleLogin = function(event) {
  event.preventDefault();

  var $emailInput = $("#email");
  var $passwordInput = $("#password");

  var values = {
    email: $emailInput.val().trim(),
    password: $passwordInput.val().trim()
  };

  if (!validateEmail($emailInput.val().trim())) {
    alert("You must enter a valid email!");
    return;
  }

  API.loginUser(values).then(function() {

    // WHEN EVERYTHING IS READY (API, ETC), FRONTEND MAKES LOGIC FOR LOGIN ERRORS OR SUCCESFULLY LOGIN.
    // IF/ELSE statements
    
  });

  $emailInput.val("");
  $passwordInput.val("");
};

// handleRegister is called whenever the user submit a new form
var handleRegister = function(event) {
  event.preventDefault();

  var $emailInput = $("#email");
  var $passwordInput = $("#password");
  var $nameInput = $("#name");

  var values = {
    email: $emailInput.val().trim(),
    password: $passwordInput.val().trim(),
    name: $nameInput.val().trim()
  };

  // Validate email
  if (!validateEmail($emailInput.val().trim())) {
    alert("You must enter a valid email!");
    return;
  }

  // Validate password
  if ($passwordInput.val().trim().length < 1) {
    alert("You must enter a password!");
    return;
  }

  // Validate name
  if ($nameInput.val().trim().length < 1) {
    alert("You must enter a name!");
    return;
  }

  API.saveUser(values).then(function() {

    // WHEN EVERYTHING IS READY (API, ETC), FRONTEND MAKES LOGIC FOR LOGIN ERRORS OR SUCCESFULLY LOGIN.
    // IF/ELSE statements

  });

  $emailInput.val("");
  $passwordInput.val("");
  $nameInput.val("");
};

// Add event listeners to the login and sign up buttons
$loginBtn.on("click", handleLogin);
$signUpBtn.on("click", handleRegister);


//validates email
function validateEmail(email) {
  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var isEmail = re.test(email);

  return isEmail;
}
//blog logic
// $(document).on("click", ".blog-2Dos", function() {
  
//   $.ajax({
//     var user = $(this).data("user");
//     var planIt = $(this).data("blog-2Dos");

//   $.ajax("/blog" + user, {
//       type: "GET",
//       data: planIt
//   }).then(function(){
//       location.reload();
//   });
// });






//   }).then(function (response) {
//     console.log(response);
//     results = response.data;
//     for (var i = 0; i < results.length; i++) {
//       // Creating and storing a div tag with class animal
//       var animalDiv = $("<div class='col-md-4' 'animal'>");
     
//       // Creating a paragraph tag with the result item's rating
//       var p1 = $("<p>").text("Rating: " + results[i].rating);
//       //runAnimate.attr(results[i].images_data-state.url);
//       var animalImage = $("<img class='imag'>");
//       animalImage.attr("src", results[i].images.fixed_height_still.url);
//       animalImage.attr("data-animate", results[i].images.fixed_height.url);
//       animalImage.attr("data-state", "still");
      
//       // Displaying the rating and image
//       animalDiv.append(p1);
//       animalDiv.append(animalImage);
//       $("#animalsView").prepend(animalDiv);
//     }
//   });
  
  //If the clicked image's state is still, update its src attribute to what its data-animate value is.
  //Then, set the image's data-state to animate
  //Else set src to the data-still value
//   if (state === "still") {
//     console.log(state);
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//     console.log("data-state");
//   } else {
//     $(this).attr("src", $(this).attr("data-still"));
//     //console.log();
//     $(this).attr("data-state", "still");
//   }
// });
