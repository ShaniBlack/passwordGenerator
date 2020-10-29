let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let specialChar = "!@#$%^&*()".split("");
let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let pwdArray = []

function getPasswordOptions() {
  let passwordLength = prompt("How long would you like your password to be?")
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Must select a number between 8 and 128. Try again!")
    return
  }
  let wantsLower = confirm("Do you want to include lower case letters?")
  if (wantsLower === true) {
    pwdArray =  pwdArray.concat(lowerCase)
  }
  let wantsUpper = confirm("Do you want to include upper case letters?")
  if (wantsUpper === true) {
    pwdArray = pwdArray.concat(upperCase)
  }
  let wantsSpecial = confirm("Do you want to include special characters?")
  if (wantsSpecial === true) {
    pwdArray =  pwdArray.concat(specialChar)
  }
  let wantsNumber = confirm("Do you want to include numbers?")
  if (wantsNumber === true) {
    pwdArray =  pwdArray.concat(numberArray)
  }

  if (wantsLower === false && wantsUpper === false && wantsSpecial === false && wantsNumber === false) {
    alert("Please select at least one option.")
    return
  }
  let outputArray = [];

  for (let i = 0; i < passwordLength; i++) {
    let pickInput = pwdArray[Math.floor(Math.random()*pwdArray.length)];
    outputArray.push(pickInput);
  }

  let outputInfo = outputArray.join("");
  return outputInfo;

  
}
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = getPasswordOptions();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
