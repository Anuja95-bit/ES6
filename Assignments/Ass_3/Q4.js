// Requirement-1: Declare an object
const dateDetails = {
    name: "Cubana Restaurant",
    location: "55th Street",
    table: 5
};

// Requirement-2: Create a function checkWeather
function checkWeather(weather) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (weather === 'clear') {
                resolve(dateDetails);
            } else {
                reject("Bad weather, so no Date");
            }
        }, 1000);
    });
}

// Requirement-3: Create a function orderUber
function orderUber(dateDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`);
        }, 2000);
    });
}

// Requirement-4: Use checkWeather and orderUber functions 
checkWeather('clear')
    .then(dateDetails => orderUber(dateDetails))
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });