function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(Response) {

    let tebleOfContent =` ## Table of Contents`

   if(Response.description !== ''){
    tebleOfContent += `\n* [Description](#Description)`
   }
   if(Response.installation !== ''){
    tebleOfContent += `\n* [Installation](#installation)`;
   }
   if(Response.usage !== ''){
    tebleOfContent += `\n* [Usage](#usage)`
   } 
   if(Response.contributing  !== ''){
    tebleOfContent += `\n* [Contributing](#contributing )`
   } 
   if(Response.tests !== ''){
    tebleOfContent += `\n* [Tests](#tests)`
   } 
   if(Response.license !== ''){
    tebleOfContent += `\n* [license](#license)`
   } ;
   
   
   let ReadMePage = `\n<h1 align="center"> ${Response.title}👋</h1>
   ![badge](https://img.shields.io/badge/license-${Response.license}-brightgreen)<br />

   ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${Response.username}/${Response.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${Response.username}/${Response.repo}?style=flat&logo=appveyor)
   


   ## Description 
   ${Response.description}

 `  
  // Add Table of Contents to markdown
    ReadMePage += tebleOfContent

    // Optional Installation section
    
    if(Response.installation !== ''){

      ReadMePage +=`\n## Installation\n*Steps required to install project and how to get the development environment running:*\n* ${Response.installation}
      `
    };

     // Optional Installation section

     if(Response.usage !==''){
      ReadMePage += `\n## usage\n*Run the following command at th root of your project and answer the prompted questions:*\n* ${Response.usage}
      
      `
     };

     // Optional Contributing section

     if(Response.usage !==''){
      ReadMePage += `\n## Contributing\n*Instructions and examples for use:*\n*${Response.contributing}
      `
     };
    

     if(Response.tests !==''){
      ReadMePage += `\n## Tests\n*Tests for application and how to run them:*\n*${Response.tests} 
      `
     };


     if(Response.license !==''){
      ReadMePage += `\n## License\n${Response.license}
       ![Badge for GitHub licence](https://img.shields.io/github/license/${Response.username}/${Response.repo}?style=flat&logo=appveyor)
      `
     };
    
   // Question

   if (Response.email !== null) {
  
    ReadMePage +=`\n## Questions\nEmail: ${Response.email}\nFollow me on Github: [${Response.username}](http://github.com/${Response.username})`;
    };
      
  return ReadMePage;

  }
