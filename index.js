const api = require("./utils/api")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const questions = [{
    message: "What is your GitHub username?",
    name: "username"
},{
    message: "What repo do you want to make a ReadMe for?",
    name: "repoName"
},{

    message: "Give a short description of your project",
    name: "projectDescription"
},{
    message: "If desired, write a Table of Contents",
    name: "tableofContents"
},{

    message: "Installation Instructions",
    name: "installInst"
},{

    message: "What is the usage of this program?",
    name: "projUsage"
},

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){throw (err)}
    })
}

function init() {
    inquirer
        .prompt(
         questions
        )
        .then(function(response){
            api.getUser(response.username).then(function(githubData){
                console.log(githubData)
            })
            writeToFile("README.md", generateMarkdown(response))
            // api.getUser(username).then(function(res){
                
            // })
            
        })

}

init();
