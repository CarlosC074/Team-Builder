const inquirer = require('inquirer');
const fs = require('fs');

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'You ok? you ok? You okay, Annie?',
                name: 'mainConfirm',
                 
            }
        ])
    .then((data) => {
        data.mainConfirm ? console.log("true") : secondMenu();
    })
}

function secondMenu() {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Was that a mf korn reference?",
                name: "kornRef",
            }
        ])

    .then((data) => {
        data.kornRef ? console.log("2nd true") : console.log("2nd false");
    })
}

mainMenu();