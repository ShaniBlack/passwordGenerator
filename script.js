let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let specialChar = "!@#$%^&*()".split("");
let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let pwdArray = [];


function getPasswordOptions() {
  let passwordLength = parseInt(prompt("How long would you like your password to be?")
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Must select a number between 8 and 128. Try again!")
    return
  }
  let wantsLower = confirm("Do you want to include lower case letters?");
  let wantsUpper = confirm("Do you want to include upper case letters?");
  let wantsSpecial = confirm("Do you want to include special characters?");
  let wantsNumber = confirm("Do you want to include numbers?");
  if (wantsLower === false && wantsUpper === false && wantsSpecial === false && wantsNumber === false) {
    alert("Please select at least one option.")
    return
  }
  if (wantsLower === true) {
    (pwdArray.push(lowerCase));
  }
  if (wantsUpper === true) {
    (pwdArray.push(upperCase));
  }
  if (wantsSpecial === true) {
    (pwdArray.push(specialChar));
  }
  if (wantsNumber === true) {
    (pwdArray.push(numberArray))
  }

//   let criteria = {
//     length: passwordLength,
//     lower: wantsLower,
//     upper: wantsUpper,
//     special: wantsSpecial,
//     number: wantsNumber
//   }
//    return criteria
// }

// let getRandom 

function getRandom(arr) {
 let randomIndex = Math.floor(Math.random()*arr.length)
 return arr[randomIndex]

}

// function generatePassword() {
  
  
  }
  // 
// getRandom(lowerCase);
// getRandom(upperCase);
// getRandom(specialChar);
// getRandom(numberArray);



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
