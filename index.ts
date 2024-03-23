#! /usr/bin/env node



import inquirer from "inquirer";

const random = Math.floor(Math.random() * 6 + 1);


const answer = await inquirer.prompt([
    {
        message: "Enter any number between 1=10",
        type: "number",
        name: "guessedNumber"
    },

]);

if(answer.guessedNumber === random) {
    console.log("Congrats! You Guessed Correct.");
    
} else {
    console.log("Try Again");
    
}