// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //function generatePassword() {
    //var passwordText = document.querySelector("#password");  
  // }
  var passwordText = document.querySelector("#password");
  var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specials = "!@#$%^&*()_+[]{}?/|;<>";
  var chars = "";
  var characters = parseInt(prompt("Please choose a password length between 8 and 128 characters."), 10)
  var capitalsUsersInput = parseInt(prompt("Please choose the number of capital letters"), 10)
  var numbersUsersInput = parseInt(prompt("Please choose the number of numbers"), 10)
  var specialsUsersInput = parseInt(prompt("Please choose the number of special characters"), 10)
  var lowersUsersInput = parseInt(prompt("Would you like add lower case letters?"), 10)

  // Validates user input
  if (characters > 128) {
    alert("Please make sure that entries are between 8 and 128 characters");
    return null;
  } else if (characters < 8) {
    alert("Please make sure that entries are between 8 and 128 characters");
    return null;
  } else {

  for (var i = 1; i <= capitalsUsersInput; i++) {
    chars += capitals.charAt(Math.floor(Math.random() * capitals.length));
  }
  for (var i = 1; i <= numbersUsersInput; i++) {
    chars += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  for (var i = 1; i <= specialsUsersInput; i++) {
    chars += specials.charAt(Math.floor(Math.random() * specials.length));
  }
  for (var i = 1; i <= lowersUsersInput; i++) {
    chars += lowers.charAt(Math.floor(Math.random() * lowers.length));
  }

  var random = chars.split("");

  random.sort(function(a){return 0.5 - Math.random()});

  var password = random.join("");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
