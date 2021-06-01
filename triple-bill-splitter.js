const prompt = require('prompt-sync')();


//Prompt requesting meal cost per person.

const mealcostpersonOne = prompt("How much did person one meal cost?");

const mealcostpersonTwo = prompt("How much did person two meal cost?");

const mealcostpersonThree = prompt("How much did person three meal cost?");

const whateveryonePaid =prompt("Type one, two, or three to find the total someone paid and what is owed from each of the others.")

const numbercostpersonOne = Number(mealcostpersonOne);
const numbercostpersonTwo = Number(mealcostpersonTwo);
const numbercostpersonThree = Number(mealcostpersonThree);
const allmealtotal = (numbercostpersonOne+ numbercostpersonTwo + numbercostpersonThree);
const peronOne = ("one");
const personTwo = ("two");
const personThree = ("three");
//Variables to store inputs from users.


const personOneowes = (allmealtotal - mealcostpersonTwo - mealcostpersonThree);

const personTwoowes = (allmealtotal - mealcostpersonOne - mealcostpersonThree);
const personThreeowes = (allmealtotal -mealcostpersonOne - mealcostpersonTwo);

if (whateveryonePaid == peronOne) {
    console.log("Person 1 paid $",allmealtotal, "person 2 owes person 1 $",personTwoowes,"and person 3 owes person 1 $",personThreeowes,".")
} 
if (whateveryonePaid == personTwo) {
    console.log("Person 2 paid $",allmealtotal, "person 1 owes person 2 $",personOneowes,"and person 3 owes person 2 $",personThreeowes,".")
} 
if (whateveryonePaid == personThree) {
    console.log("Person 3 paid $",allmealtotal, "person 1 owes person 3 $",personOneowes,"and person 2 owes person 3 $",personTwoowes,".")
} 


