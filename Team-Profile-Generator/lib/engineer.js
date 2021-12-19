//import partent class
const Employee = require('./employee');
// Creating a new class from the parent Employee
class Engineer extends Employee {
    constructor(name, email, id, github ) {
        // Chain constructor with super
        super(name, email, id);

        // Add a new property
        this.github = github;
    }

}

module.exports = Engineer;

// const newemployee2 = new Engineer('ahmed','ahmed@a.a','20','alotfey88');
// console.log(newemployee2);
