// Array of special characters to be included in password
var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



// Assignment Code

//Variable will hold user choice
var userChoice;

//Variable holding the empty array for user generated password
var userPass = []

//Select the button by using #generate selector
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var options = getPasswordOptions();

  return options;
}
// Write password to the #password input
function writePassword() {
  //Variable password holding the function generatePassword
  var password = generatePassword();
  // Variable passwordText holding selector #password
  var passwordText = document.querySelector("#password");
  //passwordText value is equal to password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getPasswordOptions() {
  //Variable that stores the lenght of the password by users options
  var quantity = parseInt(prompt("How many characters would you like your password to contain?"));

  //The global NaN property is a value representing Not-A-Number.
   if (!quantity) {
    alert('Password quantity must be provided as a number');
    return;
  }

  if (quantity < 8) {
    alert("Password lenght must be at least 8 characters");
    return;
  }

  if (quantity > 128) {
    alert("Password lenght must be less than 129 characters");
    return;
    
  }

  else{
    var addSpecialCharacters = confirm("Would you like to include special characters?");
    var addNumericCharacters = confirm("Would you like to include numerics characters?");
    var addLowerCharacters = confirm("Would you like to include lowercase characters?");
    var addUpperCharacters = confirm("Would you like to include upper characters?");
    
  }


  if (!addSpecialCharacters && !addNumericCharacters  && !addLowerCharacters  && !addUpperCharacters) {
    alert("Must contain at least one option");
  }

  //Special Characters choices
  if (addSpecialCharacters) {
    userChoice = special
        
  }
  if (addSpecialCharacters && addNumericCharacters) {
    userChoice = special.concat(numeric)
        
  }

  if (addSpecialCharacters && addNumericCharacters && addLowerCharacters) {
    userChoice = special.concat(numeric, lower);
        
  }

  if (addSpecialCharacters && addNumericCharacters && addLowerCharacters&& addUpperCharacters) {
    userChoice = special.concat(numeric, lower, upper);
  }

  //Numeric Characters choices
  if (addNumericCharacters) {
    userChoice = numeric
        
  }
  if (addNumericCharacters && addLowerCharacters) {
    userChoice = numeric.concat(lower)
        
  }

  if (addNumericCharacters && addLowerCharacters && addUpperCharacters) {
    userChoice = numeric.concat(lower, upper);
        
  }

  //Lower Characters choices
  if (addLowerCharacters) {
    userChoice = lower
        
  }
  if (addLowerCharacters && addUpperCharacters) {
    userChoice = lower.concat(upper)
        
  }

  if (addLowerCharacters && addSpecialCharacters ) {
    userChoice = lower.concat(special);
        
  }

  //Upper Characters choices
  if (addUpperCharacters) {
    userChoice = upper
        
  }
  if (addUpperCharacters && addSpecialCharacters) {
    userChoice = upper.concat(special)
  }

  for (var i = 0; i < quantity; i++) {
    var random = userChoice[Math.floor(Math.random() * userChoice.length)];
    // The array we called answer will get every selection made by the random variable and push it to his array
    userPass.push(random);
  }
// This variable result will return the array answer as a string using the .join method
  var result = userPass.join("");

  return result;


}

