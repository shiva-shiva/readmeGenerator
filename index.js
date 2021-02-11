//import {generateMarkdown} from './generateMarkdown.js';
var generateMarkdown = require('./generateMarkdown.js')
var inquirer = require('inquirer')
var fs = require('fs')

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
            name: "use",
            message: "What is the use of the application"
          },
          {
            type: "input",
            name: "contributions",
            message: "Are there any contribution rules?"
          },
          {
            type: "input",
            name: "test",
            message: "Please provide test instructions if applicable"
          },
          {
            type: "checkbox",
            message: "License?",
            name: "license",
            choices: [
              "[MIT License](LICENSE.txt)", 
              "[GNU GPLv3 License](COPYING.txt)", 
            ]
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

    fs.writeFileSync( 'Readme.md', generateMarkdown(Response) )
}
ReadMe()
//const output= ReadMe().then(Response => generateMarkdown(Response.title))
//fs.writeFileSync( 'Readme.md', output )
