// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Minimum password length
var passwordLength = 8;

// Empty array for criteria
var choiceArray = [];

function getPasswordCriteria() {
// Reset choice array for every prompt
  choiceArray = [];

// Choose password length   
var passwordLength = parsInt(prompt("Choose a password length of at least 8 characters and no more than 128 characters"));
if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
  alert("You must provide a number between 8 and 128.");
  return getPasswordCriteria();
  }
  else if (alert("Your password will be" + passwordLength + " characters."));

// Determine if user wants to include uppercase
if (confirm("Would you like to include uppercase characters?")) {
  choiceArray = choiceArray.concat(upperCasedCharacters);
  alert("Your password will contain uppercase characters.");
  }
  else if (alert("Your password will not contain uppercase characters."));

// Determine if user wants to include lowercase
if (confirm("Would you like to include lowercase characters?")) {
  choiceArray = choiceArray.concat(lowerCasedCharacters);
  alert("Your password will contain lowercase characters.");
  }
  else if (alert("Your password will not contain lowercase characters."));

// Determine if user wants to include special characters
if (confirm("Would you like to include special characters?")) {
  choiceArray = choiceArray.concat(specialCharacters);
  alert("Your password will contain special characters.");
  }
  else if (alert("Your password will not contain special characters."));

// Determine if user wants to include numbers
if (confirm("Would you like to include numbers?")) {
  choiceArray = choiceArray.concat(numericCharacters);
  alert("Your password will contain numbers.");
  }
  else if (alert("Your password will not contain numbers."));

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
