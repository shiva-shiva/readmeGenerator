//import {generateMarkdown} from './generateMarkdown.js';
var generateMarkdown = require('./util/generateMarkdown.js')
var inquirer = require('inquirer')
var fs = require('fs')
const api = require('./util/api.js');

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
            name: "contributing",
            message: "Who are the contributors of this projects?"
          },
          {
            type: "input",
            name: "tests",
            message: "Please provide test instructions if applicable"
          },
          {
            type: "list",
            message: "Chose the appropriate license for this project:",
            name: "license",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            
          },
          {
            type: "input",
            name: "email",
            message: "Please enter your GitHub username: "
          },
          {
            type: "input",
            name: "username",
            message: "Please enter your email: "
          },
          {
          type: 'input',
          message: "What is the name of your GitHub repo?",
          name: 'repo',
          }
    ]);
     //const userInfo = await api.getUser(Response)
    fs.writeFileSync( 'Readme.md', generateMarkdown(Response) )
}
ReadMe()
//const output= ReadMe().then(Response => generateMarkdown(Response.title))
//fs.writeFileSync( 'Readme.md', output )
