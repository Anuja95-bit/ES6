const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

console.log(listIngredients.includes("flour", "sugar", "eggs", "butter"))   

if( listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake" )
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate" );
}