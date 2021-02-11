
var inquirer = require('inquirer')

async function ReadMe(){
   
   const Response = await inquirer.prompt([
        {
           type:"input",
           name: "project_title",
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
  
}

ReadMe()