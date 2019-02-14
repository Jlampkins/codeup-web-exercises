"use script";

/** 1. **/
var input;
while(true) {
    input = prompt("Please enter odd number from 1 to 50");
    if (isNaN(input)) {
        alert("That is not a number.  Please try again.");
        continue;
    }
    if (input < 1 || input > 50) {
        alert("That number is out of range.  Please try again");
        continue;
    }
    if (input % 2 === 0) {
        alert("That is not an odd number.  Please try again.");
        continue;
    }else {
        break;
    }
}
console.log(input);
for(var w = 1; w <= 50; w++){
    if (w % 2 === 0){
        continue;
    }
    if(w == input){
        console.log("Yikes! Skipping number: " + w);
    }else {
        console.log("here is an odd number " + w);
    }
}


// var y = prompt("Give me an odd number between 1 and 50.");
// for(var x = 1; x <= 50; x++){
//     if(y > 50 || isNaN(y) || y < 1 || y % 2 === 0){
//         prompt("I need an odd number between 1 and 50.");
//         break;
//     }else if (y % 2 === 0){
//         console.log("Here is an odd number " + x);
//
//     }else if (x === y){
//         console.log("Skipping number " + y);
//     }
// }


// var y = prompt("Give me an odd number between 1 and 50.");
// for(var x = 1; x <= 50; x++) {
//     if (y % 2 === 0){
//         prompt("Give me an odd number between 1 and 50.");
//         break;
//     }
//     if (y % 2 === 0){
//         continue;
//
//     }else if (y % 2 === 1){
//         console.log("Here is an odd number " + x);
//
//     }
// }

// var y = prompt("Give me an odd number between 1 and 50");
//
// for (var x = 1; x <=50; x++){
//     if(x % 2 === 0){
//         continue;
//  } console.log("Here is an odd number " + x);
//
//     if(x == y){
//         console.log("skipping " + y);
//  }
// }

