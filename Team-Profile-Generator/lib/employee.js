class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    
    
    
}

// const newemployee = new Employee('ahmed', 'ahmed@a.a', '7');
// console.log(newemployee);

//export to child

module.exports = Employee;


