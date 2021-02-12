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
   
   
   let ReadMePage = `\n#${Response.title}

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
      ReadMePage += `\n## usage\n${Response.usage}
      
      `
     };

     // Optional Contributing section

     if(Response.usage !==''){
      ReadMePage += `\n## Contributing\n${Response.contributing}
      `
     };
    

     if(Response.tests !==''){
      ReadMePage += `\n## Tests\n${Response.tests} 
      `
     };


     if(Response.license !==''){
      ReadMePage += `\n## License\nlicensed under the ${Response.license}
      `
     };
    
   // Question

   if (Response.email !== null) {
  
    ReadMePage +=`\n## Questions\nEmail: ${Response.email}\nFollow me on Github: [${Response.github}](http://github.com/${Response.github})`;
    };
      
  return ReadMePage;

  }
