var password = document.getElementById("password");
// Minimum password length
var passwordLength = 8;
// Empty array for criteria
var choiceArray = [];

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

function getPasswordCriteria() {
// Reset choice array for every prompt
  choiceArray = [];

// Choose password length   
var passwordLength = parseInt(window.prompt("Choose a password length of at least 8 characters and no more than 128 characters"));

if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
  alert("You must provide a number between 8 and 128.");
  return getPasswordCriteria();
  }
  else if (alert("Your password will be " + passwordLength + " characters."));

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

  return true;

}

// Function to generate password
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctCriteria = getPasswordCriteria();

  if (correctCriteria) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  }
  else {
    // start criteria prompts again
    getPasswordCriteria();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
