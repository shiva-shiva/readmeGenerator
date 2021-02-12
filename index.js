//import {generateMarkdown} from './generateMarkdown.js';
var generateMarkdown = require('./generateMarkdown.js')
var inquirer = require('inquirer')
var fs = require('fs')
const api = require('./api.js');

async function ReadMe(){
   
   const Response = await inquirer.prompt([
        {
           type:"input",
           name:'title',
           message:"What is your project tittled?"
        },
        {
            type:"input",
            name:"description",
            message:"describe your project?"
        },
        {
            type:"input",
            name:"installation",
            message:"does it have any installation ?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the use of the application"
          },
          {
            type: "input",
            name: "contributing ",
            message: "Are there any contribution rules?"
          },
          {
            type: "input",
            name: "tests",
            message: "Please provide test instructions if applicable"
          },
          {
            type: "checkbox",
            message: "License?",
            name: "license",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            
          },
          {
            type: "input",
            name: "email",
            message: "Enter your email account"
          },
          {
            type: "input",
            name: "github",
            message: "Enter your github username"
          }
    ]);
     const userInfo = await api.getUser(Response)
    fs.writeFileSync( 'Readme.md', generateMarkdown(Response , userInfo) )
}
ReadMe()
//const output= ReadMe().then(Response => generateMarkdown(Response.title))
//fs.writeFileSync( 'Readme.md', output )
