#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome Code with Aurangzaib Mughal - CLI Number Gussing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1 );

const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message:"Enter You Guess Number(limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNumber){
    console.log("Congretulation ! you guess a Correct number.");
}
else{
    console.log("Sorry , Your Guess a Wrong Number.");
}
