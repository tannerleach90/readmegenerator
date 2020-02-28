function generateMarkdown(data) {
  return `
# ${data.repoName}
![GitHub repo size](https://img.shields.io/github/repo-size/${data.username}/${data.repoName})
# Description
  ${data.projectDescription}
  
# Table of Contents
  ${data.tableofContents}

# Installation
  ${data.installInst}

# Usage
  ${data.projUsage}

# License


# Contributing
  ${data.projContributions}


# Tests


`;
}


module.exports = generateMarkdown;

//writefile fn and pass thru title