// Assignment code here
//1.prompt user for password criteria
// password length 8<128
//prompt for lower, upper, special characters
//2. validate input
//3. generate password based on criteria


var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log("you clicked the button!")
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  console.log(numbers);

  var symbols = ["!", "@", "#", "$", "%",]
  console.log(symbols);

  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  console.log(lowercaseLetters);

  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  console.log(uppercaseLetters);

  var includeLower = confirm("Include lowercase?");

  var includeUpper = confirm("Include uppercase?");
  var includeSymbols = confirm("Include symbols?");
  var includeNumber = confirm("Include numbers?");
  
  var totalArray = []

  if(includeLower){
    console.log(includeLower)
    totalArray = totalArray.concat(lowercaseLetters)
  }

  if(includeUpper){
    console.log(includeUpper)
    totalArray = totalArray.concat(uppercaseLetters)
  }

  if(includeSymbols){
    console.log(includeSymbols)
    totalArray = totalArray.concat(symbols)
  }

  if(includeNumber){
    console.log(includeNumber)
    totalArray = totalArray.concat(numbers)

  }
  console.log(totalArray)
  if(totalArray.length === 0){
    alert("must be at least one character type")
    return "Please try again"
  }


  //if + else stmts for each?

  var numberOfChars = parseInt(prompt("How many characters?"));
  console.log(numberOfChars)

  if(numberOfChars<8 || numberOfChars>128 || isNaN(numberOfChars)){
    alert("Number must be between 8 and 128")
    return "Please try again"
  }

  var password = ""
  // Get references to the #generate element
  for (var i = 0; i < numberOfChars; i++){
    var index = Math.floor(Math.random() * totalArray.length)
    var digit = totalArray[index]
    password += digit
  }
  console.log(password)
  //4. display password on page
  return password
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //This line displays the PW on screen


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);