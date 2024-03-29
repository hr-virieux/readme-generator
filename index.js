// Required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input using Inquirer
const questions = [
  {type: 'input', name: 'title', message: 'What is the title of your project?'},
  {type: 'input', name: 'description', message: 'Provide a short description of your project:'},
  {type: 'input', name: 'installation', message: 'What are the installation instructions?'},
  {type: 'input', name: 'usage', message: 'How is this project used?'},
  {type: 'list', name: 'license', message: 'Choose a license for your project:', choices: ['MIT', 'GPLv3', 'Apache-2.0', 'BSD-3-Clause', 'None']},
  {type: 'input', name: 'contributing', message: 'How can others contribute to this project?'},
  {type: 'input', name: 'tests', message: 'What are the test instructions?'},
  {type: 'input', name: 'github', message: 'Enter your GitHub username:'},
  {type: 'input', name: 'email', message: 'Enter your email address:'},
];

// Function to write README file to the filesystem
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error('Error writing file: ', err);
      return;
    }
    console.log('Successfully created README.md');
  });
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    })
    .catch(error => console.error('Error during initialisation: ', error));
}

init();
