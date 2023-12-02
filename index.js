// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdownExports = require("./utils/generateMarkdown.js");
const { renderLicenseBadge, renderLicenseLink, generateMarkdown } =
  generateMarkdownExports;

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
      name: "motivation",
      message:
        "What was your motivation to create this project? (my motivation for creating this project is...)",
    },
    {
      type: "input",
      name: "why",
      message:
        "Why did you build this project? (I created this project because...)",
    },
    {
      type: "input",
      name: "problemSolved",
      message:
        "In your own words, what problem is this project solving? (I believe the problem this project is solving is...)",
    },
    {
      type: "input",
      name: "whatYouLearned",
      message:
        "What did you learn from creating this project? (I learned many things from creating this project such as...)",
    },
    {
      type: "input",
      name: "standOut",
      message:
        "What makes your project stand out? (What makes my projects stand is...)",
    },
    {
      type: "input",
      name: "problemSolved",
      message:
        "In your own words, what problem is this project solving? (I believe this project is solving problems such as...)",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you go about installing the application?",
    },
    {
      type: "input",
      name: "usage",
      message:
        "How do you go about using the application? Leave blank if not applicable",
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Were there any contribution to your project? Leave blank if not applicable",
    },
    {
      type: "input",
      name: "license",
      message:
        "What is the license for your project? Leave blank if not applicable",
    },
    {
      type: "input",
      name: "tests",
      message: "Any tests? Leave blank if not applicable",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is an email where you can be reached?",
    },
  ])
  .then((answers) => {
    const readMeData = `
# ${answers.projectTitle}

## Table Of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#license)
  
## Description
This project is called ${
      answers.projectTitle
    }, and my motivation for creating this project is ${
      answers.motivation
    }. I created this project because ${
      answers.why
    }. I believe the problem this project is solving is ${
      answers.problemSolved
    }. I learned many things from creating this project such as ${
      answers.whatYouLearned
    }. There are many similar projects like this one, but what makes my rendition of it stand out is that ${
      answers.standOut
    }. I believe this project is solving problems such as ${
      answers.problemSolved
    }.
  
## Installation 
${answers.installation}


## Usage
${answers.usage ? answers.usage : "N/A"}

## Contributing
${answers.contribution ? answers.contribution : "N/A"}

## Tests
${answers.test ? answers.test : "N/A"}

## Questions
For any additional questions, my gitHub account is https://github.com/${
      answers.username
    } and my Email is ${answers.email}. Feel free to contact me anytime!

## License
${answers.license ? answers.license : "N/A"}

## Links
Links to GitHub repository: https://github.com/Rilwan0410/readmeGenerator
Link to Screencastify recording: https://drive.google.com/file/d/1gFuVt-TQSAmbyTHHS1dQXfnGpgm0AZ_z/view
      `;


    writeToFile("./README.md", readMeData);
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
