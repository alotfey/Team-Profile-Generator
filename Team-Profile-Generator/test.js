const inquirer = require("inquirer");


inquirer
  .prompt([
    {
        type: "list",
        name: "channels",
        message: "Which of these TV channels would you watch?!",
        choices: [
            { name: "Investigation Discovery", value: 0 }, 
            { name: "CNN", value: 1 }, 
            { name: "Fox News", value: 2}, 
            { name: "TLC", value: 3}]
    }
  ])
  .then((responses) => {
        if (responses.channels === 0) {
            console.log("You are probably smart");
        }
        else if (responses.channels === 1) {
            console.log("You are probably well informed");
        }
        else if (responses.channels === 2) {
            console.log("You are probably not very well informed");
        }
        else {
            console.log("You are probably an idiot");
        }
});