const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const htmlFile = require('./lib/htmlPieces');

function firstMenu() {
    inquirer
        .prompt([
            {
                type: 'input',
                //I am aware that 'manager's' is gramatically incorrect, but I do not know how to fix it without confusing the code editor
                message: 'Welcome to the team builder, what is your managers name?',
                name: 'managerName'
            },
            {
                type: 'input',
                message: 'What is the managers ID?',
                name: 'managerId'
            },
            {
                type: 'input',
                message: 'What is the managers email?',
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: 'What is the managers office number?',
                name: 'managerOfficeNum'
            }
        ])
    
        .then((data) => {
            var manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNum);

            var managerTblRow = `<tr>${manager.getName()}${manager.getEmail()}${manager.getId()}${manager.getOfficeNum()}</tr>`

            htmlFile.managerTblMid = htmlFile.managerTblMid + managerTblRow;
            
            mainMenu();
        })
}

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Add a team member or, if you are finished, select "create File"',
                name: 'mainConfirm',
                choices: [""]
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

firstMenu();