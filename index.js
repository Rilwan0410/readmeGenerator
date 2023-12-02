// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What will be the description for your project?",
    },
  ])
  .then((answers) => {
    const readMeData = `
# ${answers.projectTitle}
  
## Description
${answers.description}
  
## Installation 
This is how you use the application.

## Table Of Contents
information about the table of contents

## Usage
information of the usage

## Contributing Guidelines
information for the contributions

## Test Instructions
      `;

    writeToFile("./MyREADME.md", readMeData);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("successfully added file");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
