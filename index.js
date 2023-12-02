// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([{ type: "input", name: "fileName", message: "What is your name?" }])
  .then((answers) => {
    const readMeData = `
    # Node Project
    
    ## Documentation
    This is the documentation of the readme file.
    
    ## Installation
    This is how you use the application.
    `;
    console.log(answers, readMeData);

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
