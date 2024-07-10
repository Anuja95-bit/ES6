function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu=(food)=>{
    return `I'm going to eat a ${food} for dinner`;
}

const dinnerMenu1=(food)=>`I'm going to eat a ${food} for dinner`;


console.log( dinnerMenu("veg salad") );
console.log( dinnerMenu1(" salad") );