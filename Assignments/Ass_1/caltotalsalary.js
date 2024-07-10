function calculateTotalSalary(...salaries) {
    let sum = 0;
    for (let salary of salaries) {
        sum += salary;
    }
    return sum;
}

const totalSalFn = calculateTotalSalary(10000,20000,30000);
console.log("Total sum of salary using function:", totalSalFn);


// using arrow fn
const calculateTotalSalaryArrow = (...salaries) => {
    return salaries.reduce((sum, salary) => sum + salary, 0);
}

const salaryArray = [10000,20000,30000];
const totalSalArrow = calculateTotalSalaryArrow(...salaryArray);
console.log("Total sum of salary using arrow function:", totalSalArrow);
