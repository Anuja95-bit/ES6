
// Step 1: Define base class Employee
class Employee {
    constructor(eid, name) {
        this.eid = eid;
        this.name = name;
    }

    print() {
        console.log(`Employee ID: ${this.eid}`);
        console.log(`Name: ${this.name}`);
    }
}

// Step 2: Define the subclass RegularEmployee
class RegularEmployee extends Employee {
    constructor(eid, name, department, salary) {
        super(eid, name);
        this.department = department;
        this.salary = salary;
    }

    print() {
        super.print();  
        console.log(`Department: ${this.department}`);
        console.log(`Salary: ${this.salary}`);
    }
}

// Step 3: Define the subclass ContractEmployee
class ContractEmployee extends Employee {
    constructor(eid, name, department, salary) {
        super(eid, name);
        this.department = department;
        this.salary = salary;
    }

    print() {
        super.print();  
        console.log(`Department: ${this.department}`);
        console.log(`Salary: ${this.salary}`);
    }
}

// Step 4: Create objects of the subclasses and display information using print method

// Create an object of RegularEmployee
const regularEmp = new RegularEmployee(101, "Mike", "HR", 50000);
console.log("Regular Employee:");
regularEmp.print();
console.log();

// Create an object of ContractEmployee
const contractEmp = new ContractEmployee(102, "Joe", "Accounting", 35000);
console.log("Contract Employee:");
contractEmp.print();
