//import partent class
const Employee = require('./employee');
// Creating a new class from the parent Employee
class Intern extends Employee {
    constructor(name, email, id, school ) {
        // Chain constructor with super
        super(name, email, id);

        // Add a new property
        this.school = school;
    }
}
module.exports = Intern;

// const newemployee2 = new Intern('ahmed','ahmed@a.a','20','miller');
// console.log(newemployee2);
