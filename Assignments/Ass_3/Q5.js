// AirIndia
function getAirIndiaDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ flightName: 'AirIndia', ticketPrice: 12000, travelTime: '2hrs' });
        }, 1000); 
    });
}

// Indigo
function getIndigoDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ flightName: 'Indigo', ticketPrice: 10000, travelTime: '1hrs' });
        }, 1500); 
    }); 
}

// Vistara
function getVistaraDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ flightName: 'Vistara', ticketPrice: 8000, travelTime: '3hrs' });
        }, 2000); 
    });
}

// Setup workflow using Promise.all to fetch details for all flights
Promise.all([
    getAirIndiaDetails(),
    getIndigoDetails(),
    getVistaraDetails(),
    
])
.then(flights => {
    console.log("Flight details comparison:");
    console.log(flights);
})
.catch(error => {
    console.error("Error occurred while fetching flight details:", error);
});
