#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 2244;

let enterPin = await inquirer.prompt(
    [
        {
            name:"yourPin",
            type:"number",
            message:"Enter your pin",
        }
    ]
)
if(enterPin.yourPin === myPin){
    let selectOpration = await inquirer.prompt(
        [
            {
                name:"opration",
                type:"list",
                choices:["withdraw","fast cash","check balance"],
                message:"Select opration",
            }
        ]
    );
   
        if(selectOpration.opration === "withdraw"){
            let withdrawOpration = await inquirer.prompt(
                [
                    {
                        name:"withdrawcash",
                        type:"number",
                        message:"Enter amount",
                    }
                ]
            );myBalance -= withdrawOpration.withdrawcash;
            if(withdrawOpration.withdrawcash <= myBalance){
                console.log(`your remaing balance is ${myBalance}`);
            }else{
                console.log(`your have insufficent balance`);
            }
        
        } 
        else if(selectOpration.opration === "fast cash"){
            let fastCash = await inquirer.prompt(
                [
                    {
                        name:"fast",
                        type:"list",
                        message:"Enter your fast cash amount",
                        choices:["5000","10000","20000","30000","40000","50000"]
                    }
                ]
            );if(fastCash.fast === "5000"){
                myBalance -= 5000;
                console.log(`Your opration is succesful!  \n your remaining balance is ${myBalance}.`);
    
            }else if(fastCash.fast=== "10000"){
                myBalance -= 10000;
                console.log(`Your opration is succesful!  \n your remaining balance is ${myBalance}.`);

           }else if(fastCash.fast === "20000"){
                myBalance -= 20000;
                 console.log(`Your opration is succesful!  \n your remaining balance is ${myBalance}.`);
           }
           else if(fastCash.fast ==="30000"){
            myBalance -= 30000;
             console.log(`Your opration is succesful!  \n your remaining balance is ${myBalance}.`);

           }else if(fastCash.fast ==="40000"){
            myBalance -= 40000;
            console.log(`Your opration is succesful!  \n your remaining balance is ${myBalance}.`);
           }
           else if(fastCash.fast === "50000"){
            myBalance -= 50000;
            console.log(`Your opration is succesful!  \n your remaining balance is ${myBalance}.`);
       }

    }else if(selectOpration.opration === "check balance"){
        console.log(`your balance is ${myBalance}`);
    }

    }
   else {
    console.log("your pin is incorrect");
}

let giveFeedback = await inquirer.prompt(
    [
        {
            name:"feedBack",
            type:"list",
            choices:["POOR","GOOD","EXCELLENT"],
            message:"please share your Expiriace and give us feedback"
        }
    ]
)

if(giveFeedback.feedBack === "POOR"){
    console.log("sorry! we work on it");
}else if(giveFeedback.feedBack === "GOOD"){
    console.log("thank you! we improve more");
}else if(giveFeedback.feedBack === "EXCELLENT"){
    console.log("Thanks for your feedback");
}