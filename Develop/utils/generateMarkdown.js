// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  let badge = '';
  if (License = 'MIT') {
  return badge= '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (License = 'GNU GPLv3') {
    return badge= '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (License = 'APACHE') {
    return  badge= '![License: APACHE 2.0](https://img.shields.io/badge/License-APACHE2.0-blue.svg)';
  }
  else if (License = 'BSD3') {
      return badge= '![License: BSD3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  else if (License = 'ISC') {
      return badge= '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
   }
   
  return '';
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
//   if (license) {
//     return ''
//   }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
 
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # Title of README: ${data.Title}
  # Name: ${data.Name} 

  ## Table of Contents: ${data.Contents}
  ## Description of Project: ${data.Description}
  ## Installation Instructions: ${data.Installation}
  ## Usage: ${data.Usage}
  ## License: ${data.License}
  ## Contributors: ${data.Title} was proudly made by ${data.Contributors}
  ## Tests: ${data.Tests}


  ## Questions: 
  For any questions or feedback, please email me at: 
  * ${data.Email} 
  Check out my Github at: 
  * (https://github.com/${data.Github})

                
`;
}

module.exports = generateMarkdown;
