#! /usr/bin/env node

import inquirer from "inquirer";

//set amount and pin
let myBalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code");
  let oprationAns = await inquirer.prompt([
    {
      name: "opration",
      type: "list",
      message: "please Select option",
      choices: ["withdraw", "checkbalance"],
    },
  ]);
  console.log(oprationAns);

  if (oprationAns.opration === "withdraw") {
    let amountAns = await inquirer.prompt(
      [
      { name: "amount",
       type: "number",
        message: "Enter your amount" 
      }
      ]
    );
    myBalance -= amountAns.amount;
    console.log(`your remaining balance is ${myBalance}`);

    if (amountAns.amount <= myBalance) {
      console.log(`your remaining balance is ${myBalance}`);
    } else {
      console.log("you have insufficent balance");
    }
  } else if (oprationAns.opration === "checkbalance") {
    console.log(`your current balance is: ${myBalance}`);
  }
} else {
  console.log("incorrect pin code ");
}
