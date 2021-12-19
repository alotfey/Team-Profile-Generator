//import partent class
const Employee = require('./employee');
// Creating a new class from the parent Employee
class Manager extends Employee {
    constructor(name, email, id, officeNumber ) {
        // Chain constructor with super
        super(name, email, id);

        // Add a new property
        this.officeNumber = officeNumber;
    }

}
module.exports = Manager;

// const newemployee2 = new Manager('ahmed','ahmed@a.a','20','7344315868');
// console.log(newemployee2);