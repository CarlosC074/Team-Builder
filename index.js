const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const htmlFile = require('./lib/htmlPieces');

var projectName = ''


function firstMenu() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Welcome to the team builder, what is the name of your project?',
                name: "projectName"
            },
            {
                type: 'input',
                //I am aware that 'manager's' is gramatically incorrect, but I do not know how to fix it without confusing the code editor
                message: 'What is your managers name?',
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
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNum);

            const managerTblRow = `<tr>${manager.getName()}${manager.getEmail()}${manager.getId()}${manager.getOfficeNum()}</tr>`

            htmlFile.managerTblMid = htmlFile.managerTblMid + managerTblRow;

            projectName = data.projectName;
            
            mainMenu();
        })
}

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Add a team member or, if you are finished, select "create team"',
                name: 'mainSelect',
                choices: ["add engineer", "add intern", "create team"]
            }
        ])
    .then((data) => {
        switch(data.mainSelect) {
            case "add engineer":
                addEngineer();
                break;

            case "add intern": 
                addIntern();
                break;

            case "create team":
                finishTeam();
                break;
        }
    })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the engineers name?',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'What is engineers ID?',
                name: 'engineerId'
            },
            {
                type: 'input',
                message: 'What is the engineers email?',
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: 'What is the engineers github username?',
                name: 'engineerGithub'
            }
        ])

    .then((data) => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);

        const engineerTblRow = `<tr>${engineer.getName()}${engineer.getEmail()}${engineer.getId()}${engineer.getGithub()}</tr>`

        htmlFile.engineerTblMid += engineerTblRow;

        mainMenu();
    })
}

function addIntern() {
    inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is the interns name?',
                name: 'internName'
            },
            {
                type: 'input',
                message: 'What is interns ID?',
                name: 'internId'
            },
            {
                type: 'input',
                message: 'What is the interns email?',
                name: 'internEmail'
            },
            {
                type: 'input',
                message: 'What school does the intern go to?',
                name: 'internSchool'
            }
        ])

        .then ((data) => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);

            const internTblRow = `<tr>${intern.getName()}${intern.getEmail()}${intern.getId()}${intern.getSchool()}</tr>`;

            htmlFile.internTblMid += internTblRow;

            console.log(htmlFile.internTblMid);

            mainMenu();
        })
}

function finishTeam() {
    console.log("building file");

    const fullTable = htmlFile.mainHead 
    + htmlFile.managerTblHead 
    + htmlFile.managerTblMid
    + htmlFile.managerTblTail 
    + htmlFile.engineerTblHead
    + htmlFile.engineerTblMid
    + htmlFile.engineerTblTail
    + htmlFile.internTblHead
    + htmlFile.internTblMid
    + htmlFile.internTblTail
    + htmlFile.mainTail;

    console.log(fullTable);

    fs.appendFile(`${projectName}.html`, fullTable, (err) => {
        if (err) {
            throw err;
        }
        console.log("Project is updated.");
    });

}

firstMenu();
