const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'documentName',
        message: 'What would you like to name this Read Me?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide description for your Read Me file.',
    },
    {
        type: 'input',
        name: 'tableOfcontents',
        message: 'Please type out a table of contents for your Read Me.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Now, detail in length how your application should be installed.',
    },
    
])