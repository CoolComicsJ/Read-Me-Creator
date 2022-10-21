const inquirer = require('inquirer');
const fs = require('fs');


const generateReadMe = ({projectName, description, installation, licenseChoice, usage, contributions, testInstructions, gitHuburl, email}) => 

`# ${projectName} Readme 
    
# Table of Contents
    
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Test Instructions](#test)
5. [Contributions](#contributions)
6. [Questions](#questions)
7. [License](#license)
    
## Description<a name="description"></a>
    
${description}
    
## Installation Instructions<a name="installation"></a>
    
${installation}
    
## Usage <a name="usage"></a>
    
${usage}
    
## Test Instructions<a name="test"></a>
    
${testInstructions}
    
## Contributors<a name="contributions"></a>
    
${contributions}
    
## Questions<a name="questions"></a>
    
To contact me please refer to the following links
${email}
${gitHuburl}
    
## License
  

${licenseChoice}`



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
    },
    {
        type: 'input',
        name: 'gitHuburl',
        message: 'Provide your GitHub profile URL'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Lastly, give your E-Mail Address'
    }
]).then((answers) => {
    console.log(answers)
    const readMeAnswers = generateReadMe(answers);

    fs.writeFile('readme.md', readMeAnswers, (err) =>
    err ? console.log(err) : console.log('Read Me Successfully Generated!')
    )
})