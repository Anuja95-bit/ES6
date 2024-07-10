let empInfo = [
    { name: 'Mike', dept: 'HR', salary: 20000, type: 'regular' },
    { name: 'Joe', dept: 'Account', salary: 30000, type: 'contract' },
    { name: 'Max', dept: 'IT', salary: 50000, type: 'regular' },
];

// 1. Store department name in a new array and display it. use array.push method to create a new array
let deptNames = [];
empInfo.forEach(emp => {
    deptNames.push(emp.dept);
});
console.log("Department names using array.push:", deptNames);

// 2. Store and display department names using map and anonymous function
let deptNamesAnonymous = empInfo.map(function(emp) {
    return emp.dept;
});
console.log("Department names using map and anonymous function:", deptNamesAnonymous);

// 3. Store and display department names using map and arrow function
let deptNamesArrow = empInfo.map(emp => emp.dept);
console.log("Department names using map and arrow function:", deptNamesArrow);

// 4. Display total salary using reduce and anonymous function
let totalSalaryAnon = empInfo.reduce(function(acc, emp) {
    return acc + emp.salary;
}, 0);
console.log("Total salary using reduce and anonymous function:", totalSalaryAnon);

// 5. Display total salary using reduce and arrow function
let totalSalaryArrow = empInfo.reduce((acc, emp) => acc + emp.salary, 0);
console.log("Total salary using reduce and arrow function:", totalSalaryArrow);

// 6. Display employee information whose salary is >= 30000 using filter and anonymous function
let empSalaryAnonymous = empInfo.filter(function(emp) {
    return emp.salary >= 30000;
});
console.log("Employees with salary >= 30000 using filter and anonymous function:", empSalaryAnonymous);

// 7. Display employee information whose salary is >= 30000 using filter and arrow function
let empSalaryArrow = empInfo.filter(emp => emp.salary >= 30000);
console.log("Employees with salary >= 30000 using filter and arrow function:", empSalaryArrow);