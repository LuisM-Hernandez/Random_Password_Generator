// Array of special characters to be included in password
var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Variable will hold users choice
var userChoice;

//Variable holding the empty array for user generated password
var userPass = []

//Select the button by using #generate selector
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  // Variable options will hold the getPasswordFunction and return it
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
  //Variable that stores the lenght of the password by users options. It is parsed so it can return an integer instead of a string
  var quantity = parseInt(prompt("How many characters would you like your password to contain?"));

  // If statement with the condition that if quantity isn't a number it will alert errors
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

  //Else holding variables to confirm options that the user will be prompted
  else{
    var addSpecialCharacters = confirm("Would you like to include special characters?");
    var addNumericCharacters = confirm("Would you like to include numerics characters?");
    var addLowerCharacters = confirm("Would you like to include lowercase characters?");
    var addUpperCharacters = confirm("Would you like to include upper characters?");
    
  }

  //If statement that alerts if no option was chosen
  if (!addSpecialCharacters && !addNumericCharacters  && !addLowerCharacters  && !addUpperCharacters) {
    alert("Must contain at least one option");
  }

  //User choices

  //Single Option
  if (addSpecialCharacters) {
    //userChoice variable will now hold what the user choose as options for his password and if chosen more than one it will merge the arrays creating a new one with the options chosen.
    userChoice = special
        
  }

  if (addNumericCharacters) {
    userChoice = numeric
        
  }
  if (addLowerCharacters) {
    userChoice = lower
        
  }

  if (addUpperCharacters) {
    userChoice = upper
        
  }

  //Double Option
  if (addSpecialCharacters && addNumericCharacters) {
    userChoice = special.concat(numeric)
        
  }

  if (addLowerCharacters && addSpecialCharacters) {
    userChoice = lower.concat(special)
        
  }

  if (addUpperCharacters && addSpecialCharacters) {
    userChoice = upper.concat(special)
        
  }

  if (addNumericCharacters && addLowerCharacters) {
    userChoice = numeric.concat(lower)
        
  }
  if (addNumericCharacters && addUpperCharacters) {
    userChoice = numeric.concat(upper)
        
  }

  if (addLowerCharacters && addUpperCharacters) {
    userChoice = lower.concat(upper)
        
  }

  //Three Options

  if (addSpecialCharacters && addNumericCharacters && addLowerCharacters) {
    userChoice = special.concat(numeric,lower)
    
  }
  if (addSpecialCharacters && addLowerCharacters && addUpperCharacters) {
    userChoice = special.concat(lower,upper)
    
  }

  if (addSpecialCharacters && addNumericCharacters && addUpperCharacters) {
    userChoice = special.concat(numeric,upper)
    
  }

  if (addNumericCharacters && addLowerCharacters && addUpperCharacters) {
    userChoice = numeric.concat(lower,upper)
    
  }
  
  if (addNumericCharacters && addLowerCharacters && addUpperCharacters) {
    userChoice = numeric.concat(lower,upper)
    
  }

  if (addSpecialCharacters && addNumericCharacters && addLowerCharacters && addUpperCharacters) {
    userChoice = special.concat(numeric, lower, upper)
    
  }

  //For loop that checks if the quantity variable and loops through it.
  for (var i = 0; i < quantity; i++) {
    // Variable random will take the userChoice and using Math.Floor and Math.Random will go through out the length of the new array and choose from the arrays to create a new one.
    var random = userChoice[Math.floor(Math.random() * userChoice.length)];
    //The random variable created above will now have the userChoice array and will be pushed to userPass empty array using the .push method
    userPass.push(random);
  }
  //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
  var result = userPass.join("");

  return result;


}

