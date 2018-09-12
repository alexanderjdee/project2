$(document).ready(function() {
  $(".carousel").carousel({
    ride: true,
    interval: 2000
  });
});

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
    if ($loginBtn.val().trim() !== User.username) {
      alert("You must enter a valid username!");
      return;
    }
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
