function add(nums) {
    
    console.log(arguments);
}

add(4, 5, 7, 8, 12)

function add1(...nums) {
    
    console.log(nums);
}

add1(4, 5, 7, 8, 12)