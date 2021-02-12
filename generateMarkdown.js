function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(Response , userInfo) {

    let tebleOfContent =` ## Table of Contents`

   if(Response.description !== ''){
    tebleOfContent += `
      * [Description](#Description)`
   }
   if(Response.installation !== ''){
    tebleOfContent += `
    * [Installation](#installation)`;

   }
   if(Response.usage !== ''){
    tebleOfContent += `
     *[Usage](#usage)`
   } 
   if(Response.contributing  !== ''){
    tebleOfContent += ` 
    * [Contributing](#contributing )`
   } 
   if(Response.tests !== ''){
    tebleOfContent += ` 
    * [Tests](#tests)`
   } 
   if(Response.license !== ''){
    tebleOfContent += `
     * [license](#license)`
   } ;
   
   
  /* let ReadMePage = `

   #${Response.title}

   ## Description 
   ${Response.description}

 `  
  // Add Table of Contents to markdown
    ReadMePage += tebleOfContent

    // Optional Installation section
    
    if(Response.installation !== ''){

      ReadMePage +=`

      ## Installation 

      *Steps required to install project and how to get the development environment running:*

      * ${Response.installation}
      `
    };

     // Optional Installation section

     if(Response.usage !==''){
      ReadMePage += `

      ## usage
      
      ${Response.usage}
      
      `
     };

     // Optional Contributing section

     if(Response.usage !==''){
      ReadMePage += `

      ## Contributing
      
      ${Response.contributing}
      
      `
     };
    

     if(Response.tests !==''){
      ReadMePage += `

      ## Tests
      
      ${Response.tests}
      
      `
     };


     if(Response.license !==''){
      ReadMePage += `

      ## License

      licensed under the ${Response.license}
      
      `
     };
    
   // Question

   if (Response.email !== null) {
  
    ReadMePage +=
    `
    ## Questions

    Email: ${Response.email}
    Follow me on Github at [${Response.github}](http://github.com/${Response.github})`;
    };

      
  return ReadMePage;*/

  }
