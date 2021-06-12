// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Assignment Code
//Select the button by using #generate selector
var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {
  //Variable that stores the lenght of the password by users options
  var length = parseInt(prompt("How many characters would you like your password to contain?"));

  //The global NaN property is a value representing Not-A-Number.
   if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  if (length < 8) {
    alert("Password lenght must be at least 8 characters");
    return;
  }

  if (length > 128) {
    alert("Password lenght must be less than 129 characters");
    return;
    
  }

  var addSpecialCharacters = confirm("Would you like to include special characters?");
  var addNumericCharacters = confirm("Would you like to include numerics characters?");
  var addLowerCharacters = confirm("Would you like to include lowercase characters?");
  var addUpperCharacters = confirm("Would you like to include upper characters?");

  if (addSpecialCharacters === false && addNumericCharacters === false && addLowerCharacters === false && addUpperCharacters === false) {
    alert("Must contain at least one option");
    return;
  }
  

}


function generatePassword() {
  //To generate password I need to abide by this rules:
  //1. Prompt the user to a lenght of 8 characters minimum or 128 max
  //2.Prompt the user to password criteria (Special Char, Num, low, etc)

  var options = getPasswordOptions();
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
