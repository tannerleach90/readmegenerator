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
}

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
        .then(function({username, repoName, }){
            writeToFile("README.md", generateMarkdown(repoName))
            // api.getUser(username).then(function(res){
                
            // })
            
        })

}

init();
