const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide description for your Read Me file.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Now, detail in length how your application should be installed.',
    },
    {
        type: 'list',
        name: 'licenseChoice',
        message: 'Choose a license for your project.',
        choices:  ['MIT License', 'Mozilla Public License 2.0', 'Creative Commons Zero v1.0 Unicversal']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Detail how your application should be used.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Credit whomever contributed to the creation of this application.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Write out how your application should be tested for functionality.',
    }
]).then((data) => {
    console.log(data)
})