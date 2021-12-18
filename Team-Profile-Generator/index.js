// import  modules
const inquirer = require('inquirer');
const fs = require('fs');
// import classes
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Questions = require('./lib/questions');
const Renderhtml = require('./lib/renderhtml');
const { nextTick } = require('process');




// prompt Questions
function askrepeat() {
  inquirer
  .prompt(Questions.addQ)
  .then((answers) => {
    if (answers.addQ === 0) {
      engineerQ()
      
    } else if (answers.addQ === 1) {
      internQ()
      
    } else if (answers.addQ === 2) {
      console.log("finish building my team");
    } else return "error happen"
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!")
    } else {
      console.log(error)
    }
})
}




  // Question start
function addManager() {
  

  inquirer
  .prompt(Questions.managerQ) 
  .then((answers) => {
    createNewManager(answers)
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!")
    } else {
      console.log(error)
    }
})
  
  
}
// inquerir Engineer
function engineerQ(answers) {
  inquirer
  .prompt(Questions.engineerQ)
  .then((answers) => {
    createNewEngineer(answers)
    
  })

  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!")
    } else {
      console.log(error)
    }
})
}

// inquerir Intern 
function internQ(answers) {
  inquirer
  .prompt(Questions.internQ)
  .then((answers) => {
    createNewIntern(answers)
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!")
    } else {
      console.log(error)
    }
})
}


// create new manager 
function createNewManager(data) {
  newManager = new Manager(data.mName, data.mId, data.mEmail, data.ophone);
  askrepeat();
  console.log(newManager);
}
//create new engineer
function createNewEngineer(data) {
  newEngineer = new Engineer(data.engName, data.engId, data.engEmail, data.gitHub);
  console.log(newEngineer);
  askrepeat();
}
//create new Intern
function createNewIntern(data) {
  newIntern = new Intern(data.inName, data.inId, data.inEmail, data.school);
  console.log(newIntern);
  askrepeat();
}

// lunch Questions
addManager();









