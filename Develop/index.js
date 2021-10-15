// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const generateMarkDown = require('./utils/generateMarkDown');

//Prompt User
// TODO: Create an array of questions for user input
const promptUser =  [
        {
            type: 'input',
            name: 'Name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
          },
        {
          type: 'input',
          name: 'Title',
          message: 'What is the title of your project? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your project name!');
              return false;
            }
          }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like add a description about your project?',
            default: true
          },
        {
          type: 'input',
          name: 'Description',
          message: 'Please provide description of project:',
          when: ({ confirmDescription }) => {
            if (confirmDescription) {
              return true;
            } else {
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'Contents',
          message: 'Provide a table of contents to make it easy for users to find what they need:'
        },
        {
          type: 'input',
          name: 'Installation',
          message: 'What are the steps required to install your project?'
        },
        {
          type: 'input',
          name: 'Usage',
          message: 'Provide instructions and examples for use:'
        },
        {
          type: 'checkbox',
          name: 'License',
          message: 'What License do you need for this project?',
          choices: ['None', 'MIT', 'GNU GPLv3', 'APACHE', 'BSD3','ISC']
        },
        {
          type: 'input',
          name: 'Contributing',
          message: 'What are the contributing guidelines?'
        },
        {
          type: 'input',
          name: 'Tests',
          message: 'Write tests for your application and provide examples on how to run them:'
        },
        {
          type: 'input',
          name: 'Email',
          message:'What is your email?',
        },
        {
          type: 'input',
          name: 'Github',
          message: 'What is your GitHub username?'
        },
        {
         type: 'input',
         name: 'Questions',
         message: 'How can you be reached for questions?'
        },
        {
         type: 'confirm',
         name: 'feature',
         message: 'Would you like to feature this project?',
         default: false
        },
        {
         type: 'confirm',
         name: 'confirmAddProject',
         message: 'Would you like to enter another project?',
         default: false
          }
        ];
      
      // promptUser()
      // .then(answers => console.log(answers))
      // .then(promptProject)
      // .then(projectAnswers => console.log(projectAnswers))

// TODO: Create a function to write README file
  function writeToFile(fileName, data) {
  return fs.writeFileSync (path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
  function init() {
  inquirer.prompt(promptUser).then((inquirerResponses=>{
    writeToFile("readme.md",generateMarkDown({...inquirerResponses}))
  }))
}

// Function call to initialize app
init();
