let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = contacts; //personalFriends acting as a reference type
 //it is not create new array    

 let personalFriends2 = [ "David", ...contacts, "Lily" ];
 let personalFriends1 = [...contacts];//it will copies an array

contacts.push("John");

console.log(personalFriends);
console.log(contacts);
console.log(personalFriends1);
console.log(personalFriends2);

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}
let employee={
    ...person,
    salary: 50000,
    position: "Software Developer"

}

console.log(employee);
