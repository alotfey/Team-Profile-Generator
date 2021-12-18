//  Questions 
// Team manager Questions
const managerQ = [
    {
        type: "input",
        name: "mName",
        message: "What's team manager’s name?"
    },
    {
        type: "input",
        name: "mId",
        message: "What's team manager’s ID?"
    },
    {
        type: "input",
        name: "mEmail",
        message: "What's team manager’s Email?"
    },
    {
        type: "input",
        name: "ophone",
        message: "What's team manager’s office phone?"
    },
    
]
const engineerQ = [
    {
        type: 'input',
        message: 'enter the engineer’s name:',
        name: 'engName',
      },
      {
        type: 'input',
        message: 'enter the engineer’s ID:',
        name: 'engId',
      },
      {
        type: 'input',
        message: 'enter the engineer’s email',
        name: 'engEmail',
      },
      {
        type: 'input',
        message: 'enter the engineer’s GitHub username',
        name: 'gitHub',
      }

]
const addQ = [
    {
        type: 'list',
        message: 'choices for your team',
        name: 'addQ',
        choices: [
            {name: 'add an engineer', value: 0}, 
            {name: 'add an intern', value: 1}, 
            {name: 'finish building my team', value: 2}
        ]
      }

]

const internQ = [
    {
      type: 'input',
      message: 'enter the intern’s name:',
      name: 'inName',
    },
    {
      type: 'input',
      message: 'enter the intern’s ID:',
      name: 'inId',
    },
    {
      type: 'input',
      message: 'enter the intern’s email:',
      name: 'inEmail',
    },
    {
      type: 'input',
      message: 'enter the intern’s school:',
      name: 'school',
    },

  ]
  module.exports = {managerQ, engineerQ, addQ, internQ};  