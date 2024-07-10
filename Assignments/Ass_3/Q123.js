// functions for hiring
function hireEmployee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Employee Hired...");
            resolve("Employee Hired");
        }, 1000);
    });
}

// functions for training
function trainEmployee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Employee Trained...");
            resolve("Employee Trained");
        }, 1500);
    });
}

// functions for project allocation
function allocateProject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Project allocated...");
            resolve("Project Allocated");
        }, 2000);
    });
}

// Setup workflow using Promises Q-1
hireEmployee()
    .then(trainEmployee)
    .then(allocateProject)
    .then(() => {
        console.log("Workflow completed successfully.");
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });

// Setup workflow using Promise.all Q-2
Promise.all([hireEmployee(), trainEmployee(), allocateProject()])
.then(() => {
    console.log("Workflow completed successfully.");
})
.catch((error) => {
    console.error("Error occurred:", error);
});

// Setup workflow using async/await Q-3
async function setupWorkflow() {
    try {
        await hireEmployee();
        await trainEmployee();
        await allocateProject();
        console.log("Workflow completed successfully.");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}
setupWorkflow();

