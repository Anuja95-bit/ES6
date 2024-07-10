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

// Function to find the quickest flight
function findQuickestFlight() {
    return Promise.all([
        getAirIndiaDetails(),
        getIndigoDetails(),
        getVistaraDetails()
    ])
    .then(flights => {
        let quickestFlight = flights.reduce((quickest, currentFlight) => {
            if (parseInt(currentFlight.travelTime) < parseInt(quickest.travelTime)) {
                return currentFlight;
            } else {
                return quickest;
            }
        });
        return [quickestFlight];
    });
}

findQuickestFlight()
    .then(quickestFlight => {
        console.log("Quickest flight details:");
        console.log(quickestFlight);
    })
    .catch(error => {
        console.error("Error occurred while finding the quickest flight:", error);
    });
