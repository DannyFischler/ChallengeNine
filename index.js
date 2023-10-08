const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application.',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    }
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if (err) throw err;
        console.log('README generated successfully!');
    });
}

function init() {
    inquirer.prompt(questions).then(answers => {
        const markdownContent = generateMarkdown(answers);
        writeToFile("README.md", markdownContent);
    });
}

init();
