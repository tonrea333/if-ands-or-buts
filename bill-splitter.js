const prompt = require('prompt-sync')();

//Prompt how much did person one pay.

const dinernumberOne = prompt ("How much did person one's meal cost?");
const dinernumberTwo = prompt("How much did person two's meal cost?");
const whopaidWhat = prompt("Type one or two to know who paid and what is owed.")

const numbercostOne = Number(dinernumberOne)
const numbercosttwo = Number(dinernumberTwo)
const combinemealCost  =(numbercostOne + numbercosttwo)
const peronOne = ("one");
const personTwo = ("two")
const personOneowed =(combinemealCost - numbercosttwo);
const personTwoowed =(combinemealCost - numbercostOne);



if (whopaidWhat == peronOne) {
    console.log("Person 1 paid $",combinemealCost, "person 2 owes person 1 $",personTwoowed,".")
}
else if (whopaidWhat == personTwo) {
    console.log("Person 2 paid $",combinemealCost, "person 1 owes person 2 $",personOneowed,".")
}