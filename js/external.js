// "use strict";
//
// console.log("Hello from external JavaScript!");
//
// alert("Welcome to my Website!");
//
// var favcolor = prompt("What is your favorite color?");
// console.log(favcolor + " is my favorite color too!");
//
// var mermaidDays = prompt("How many days did you rent Little Mermaid?");
// var bearDays = prompt("How many days did you rent That Bear Movie?");
// var herculeDays = prompt("How many days did you rent Hercules?");
// var cost = parseInt((prompt("How much did the movies cost per day?")).replace("$", ""));
// // var mermaidCost = mermaidDays * cost;
// // var bearCost = bearDays * cost;
// // var herculeCost = herculeDays * cost;
// var movietotal= ((+mermaidDays + +bearDays + +herculeDays) * cost);
// alert("You will have to pay $" + movietotal.toFixed(2));
//
//
// var google = parseInt((prompt("How much did Google pay you per hour?")).replace('$', ''));
// var amazon = parseInt((prompt("How much did Amazon pay you per hour?")).replace("$", " "));
// var facebook = parseInt((prompt("How much did Facebook pay you per hour?")).replace("$", " "));
// var googtime = prompt("How many hours did you work for Google?");
// var amaztime = prompt("How many hours did you work for Amazon?");
// var facetime = prompt("How many hours did you work for Facebook?");
//
// var googlerate = google * googtime;
// var facerate = facebook * facetime;
// var amazrate = amazon * amaztime;
// var total = googlerate + amazrate + facerate;
//
// alert("You will receive $" + total.toFixed(2) + " for this week");
//
//
//
//
// // using pure bolean for class schedule exercise
//
// var classIsFull = confirm("Confirm that the class if full");
// var classSchedulesCheck = confirm("Confirm schedules do not conflict");
// var studentEnrolled = !classIsFull && classSchedulesCheck;
// alert("Student enrollement status: " + studentEnrolled);
//
//
// //class schedule exercise if/else
//
// var classIsFull = prompt("Is the class full?").toLowerCase();
// var classSchedulesCheck = prompt("Does the class conflict with your schedule?").toLowerCase();
//
// if (classIsFull === "no" && classSchedulesCheck === "no") {
//     alert("Congratulations!  You are enrolled");
// }
//     else {
//         alert("You are unable to enroll");
// }
//
//
//
// // coupon exercise with pure bolean
//
// var items = prompt("How many items are you buying?");
// var offerValid = confirm("Is the offer still valid?");
// var member = confirm("Are you a member?");
// var productDiscount = ((items > 2 || member) && offerValid);
//
// alert("Product discount status: " + productDiscount);
//
//
// // Coupon Exercise with If/Else
//
// var items = prompt("How many items are you buying?");
// var offerValid = prompt("Is the offer still valid?").toLowerCase()
// var member = prompt("Are you a member?").toLowerCase();
//
//
// if ((items > 2 || member === "yes") && offerValid === "yes") {
//     alert("Discount has been applied");
// }
//     else {
//         alert("Discount is unavailable");
// }
//
//
//
// var username = 'codeup';
// var password = prompt("Please enter your password");
//
// if (password.length >= 5) {
//     alert("password is acceptable");
// }
//     else {
//         alert("Please select a new password");
// }

// Write a function, isShortWord, that takes in a string and returns the boolean
// value true if the passed argument is shorter than 5 characters. Return false
// otherwise.
    function isShortWord(string) {
            return string.length < 5;
    }

console.log(isShortWord("oiuoiuweoiruwo"));
console.log(isShortWord("cat"));

// Write a function, isSameLength, that takes in two string inputs and returns the
// boolean value true if the passed arguments are the same length. Return false
// otherwise.

function isSameLength(str1, str2) {
    return str1.length === str2.length;
}
    console.log(isSameLength("bob", "cat"));
    console.log(isSameLength("bob", "catman"));


// Write a function, getSmallerSegment, that takes in a string and a number input.
// The function should return a substring of the first argument that is as many
// characters long as the second argument in lowercase.

// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

function getSmallerSegment(str, num){
    return str.substring(0, num)
}





function getSmallerSegment(str, num) {
    return str.substring(0, num).toLowerCase();
}

console.log(getSmallerSegment("Codeup", 3));
console.log(getSmallerSegment("hEllo", 4));

(function(){

//This is an iffy to wrap your JS file.

})();




