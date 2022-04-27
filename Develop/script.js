// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var userChoice = window.prompt("How many characters would you like the password to be?");
  var length = 12
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYX0123456789!@#$%^&*()";
  var password = "";
  for (var i = 0; i <= chars.length; i++) {
    password += chars.charAt(Math.floor(Math.random() * n));
  };
  return password;
}