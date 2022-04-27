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
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYX0123456789!@#$%^&*()";
  var password = "";
  for (var i = 0; i <= userChoice; i++) {
    password += chars.charAt(Math.random() * n);
  };
  return password;
}