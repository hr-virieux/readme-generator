// Function to render the license badge based on user's license choice
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
}

// Function to return the license link for the chosen license
function renderLicenseLink(license) {
  if (license === 'None') return '';
  switch (license) {
    case 'MIT': return 'https://opensource.org/licenses/MIT';
    case 'GPLv3': return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache-2.0': return 'https://opensource.org/licenses/Apache-2.0';
    case 'BSD-3-Clause': return 'https://opensource.org/licenses/BSD-3-Clause';
    default: return '';
  }
}

// Function to render the license section with the license name and link
function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License
  
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// Main function to generate markdown text for the README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
For questions, please contact me at [${data.email}](mailto:${data.email}) or visit my [GitHub profile](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
