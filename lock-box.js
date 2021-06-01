const prompt = require('prompt-sync')();

//Store the lock box combination at top of program.

const keyCode = ("3214");

//User prompt to enter password.

const keycodeEntry = prompt("Enter the key code, 3214, to gain access.");

//If statements to process user inputs and output appropriate response.

if (keycodeEntry == "3214") {
    console.log("Success you entered the correct key.") 
} else  {
console.log("Failure to enter the correct key.")}