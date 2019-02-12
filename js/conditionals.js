"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// var response = confirm("Do you wish to enter a number?");
// var userNum;
// var user100;
//
//
//
//
//     if (response) {
//         userNum = prompt("Please enter desired number");
//     }
//
//     if(isNaN(userNum)) {
//         alert("A number was not entered");
// }
//
//     if (userNum % 2 === 0) {
//         alert("You have entered an even number");
//
// }   else if (userNum % 2 === 1) {
//         alert("You have entered an odd number");
// }
//
//        if (user100 = +userNum + 100) {
//            alert("The number is " + user100);
//        }
//
//     if (userNum >=0) {
//         alert("You number is positive");
//
//     } else if (userNum < 0) {
//         alert("Your number is negative");
//     }






/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];



// function analyzeColor(color) {
//     if (color === "red") {
//         return "Red is the color of blood";
//
//     } else if (color === "orange") {
//         return "Orange is so good";
//
//     } else if (color === "yellow") {
//         return "Yellow is the color of the sun";
//
//     } else if (color === "green") {
//         return "Green is all right";
//
//     } else if (color === "blue") {
//         return "Blue is what I am";
//
//     } else if (color === "indigo") {
//         return "Indigo is kind of purple";
//
//     } else if (color === "violet") {
//         return "Violet is a girl's name";
//
//     } else {
//         return "I am not familiar with " + color;
//     }
// }
//
// console.log(analyzeColor("red"));
// console.log(analyzeColor("orange"));
// console.log(analyzeColor("yellow"));
// console.log(analyzeColor("green"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("indigo"));
// console.log(analyzeColor("violet"));
// console.log(analyzeColor("pink"));






/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(color) {
//     switch (color) {
//         case "red":
//             return "red is the color of blood";
//             break;
//         case "orange":
//             return "orange is so good";
//             break;
//         case "yellow":
//             return "Yellow is the color of the sune";
//             break;
//         case "green":
//             return "Green is the all right";
//             break;
//         case "blue":
//             return "Blue is what I am";
//             break;
//         case "indigo":
//             return "Indigo is like purple";
//             break;
//         case "violet":
//             return "Violet is a girl's name";
//             break;
//     }
// }
// console.log(analyzeColor("red"));
// console.log(analyzeColor("orange"));
// console.log(analyzeColor("yellow"));
// console.log(analyzeColor("green"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("indigo"));
// console.log(analyzeColor("violet"));
// console.log(analyzeColor("pink"));





/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var color = prompt("Enter a color.");
// var answer;
//
//
// function analyzeColor(color) {
//     if (color === "red") {
//         answer = "Red is the color of blood";
//
//     } else if (color === "orange") {
//         answer = "Orange is so good";
//
//     } else if (color === "yellow") {
//         answer = "Yellow is the color of the sun";
//
//     } else if (color === "green") {
//         answer = "Green is all right";
//
//     } else if (color === "blue") {
//         answer = "Blue is what I am";
//
//     } else if (color === "indigo") {
//         answer = "Indigo is kind of purple";
//
//     } else if (color === "violet") {
//         answer = "Violet is a girl's name";
//
//     } else {
//         answer = "I am not familiar with " + color;
//     }
//     return answer;
// }
// alert(analyzeColor(color));





/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var discountedPrice;
//
// function calculateTotal(luckyNum, total){
//     if (luckyNum === 1) {
//         discountedPrice = total - (total * .10);
//     } else if (luckyNum === 2) {
//         discountedPrice = total - (total * .25);
//     } else if (luckyNum === 3) {
//         discountedPrice = total - (total * .35);
//     } else if (luckyNum === 4) {
//         discountedPrice = total - (total * .50);
//     } else if (luckyNum === 5) {
//         discountedPrice = total - (total * 1);
//     } else if (luckyNum === 0) {
//         discountedPrice = total;
//     }
//     return discountedPrice;
// }
//
// console.log(calculateTotal(1, 100));
// console.log(calculateTotal(2, 100));
// console.log(calculateTotal(3, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));
// console.log(calculateTotal(0, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
// var luckyNum = Math.floor(Math.random() * 5);
// var total = parseInt((prompt("What is your total bill amount?")).replace("$", ""));
//
// alert("Congratulations!  Your Lucky Number was " + luckyNum + "!\nYour price before discount was $" + total + "\nYour discounted price comes to $" + calculateTotal(luckyNum, total));


// var answer;
// function makeJustinMessage(input){
//     if (input ==="Justin") {
//         answer = "It's Justin!";
//     }else {
//         answer = "It's not Justin :(";
// } return answer;
// } console.log(makeJustinMessage("Justin"));

// var answer;
// function streetLight(input){
//     if (input.toLowerCase() === "red"){
//         answer = "Stop"
//     }else if (input.toLowerCase() === "green"){
//         answer ="Go!"
//     }else if (input.toLowerCase() === "yellow"){
//         answer = "slow down"
//     }return answer;
// }
// console.log(streetLight("Red"));
// console.log(streetLight("yeLLow"));
// console.log(streetLight("GReen"));

// var answer;
// function simply(input){
//
//     if (input === ""){
//         answer = "no input provided";
//     }else {
//         answer = input;
//     }
//     return answer;
// }
// console.log(simply("Did this work?"));
// console.log(simply(""));

// var answer;
// function unique(digit){
//     if (digit.length > 1) {
//         answer = "too many digits"
//     }else if (isNaN(digit)) {
//         answer = "invalid input"
//     }
//     return answer;
// }
// console.log(unique("10"));

/**tolowercase and tosubstring example**/
// var answer;
// var day = prompt("What is your favorite day?").toLowerCase().substring(0,3);
// function favDay(day){
//
//     if (day === "mon") {
//         answer = "Garfield hates Mondays"
//     } else if (day === "tue") {
//         answer = "Tuesday is the Toad"
//     } else if (day === "wed") {
//         answer = "Wednesday is Hump Day"
//     } else if (day === "thu") {
//         answer = "thursday is Friday Junior"
//     } else if (day === "fri") {
//         answer = "friday is the day!"
//     } else {
//         answer = day + " is a made up day!"
//     }
//     return answer;
// }
// alert(favDay(day));
/** isNaN function with if/else**/
// var answer;
// var input = prompt("Please enter a number");
// function num(input){
//     if (isNaN(input)){
//         answer = ("this is not a number");
//     }else {
//         answer = "this is a number";
//     } return answer;
// }
// alert(num(input));

/**Ternary Function**/
// var input = prompt("Please enter a number");
// function num(input){
//     var answer = (isNaN(input)) ? "This is not a number" : "This is a number";
// return answer;
// }
// alert(num(input));



/** Use of Trim, lowercase, and substring.  IF/ELSE with nested IF/ELSE**/
// var answer;
// var spring;
// var summer;
// var fall;
// var winter;
//
// var input = prompt("Choose a season! Spring, Summer, Fall or Winter.").trim().toLowerCase();
// function season(input) {
//     if (input === "spring") {
//         var spring = prompt("Choose a month! April, May June").trim().toLowerCase().substring(0,3);
//             if (spring === "apr") {
//             answer = "April showers!"
//             } else if (spring === "may") {
//             answer = "May flowers!"
//             } else if (spring === "jun") {
//             answer = "June we graduate!";
//             }
//
//     }else if (input === "summer"){
//         summer = prompt("Choose a month! July, August, September").trim().toLowerCase().substring(0,3);
//             if (summer === "jul"){
//             answer = "Freedom Day is in July!";
//             }else if (summer === "aug"){
//             answer = "August is the 8th month";
//             }else if ( summer === "sep"){
//             answer = "September is the 9th month";
//             }
//
//     }else if (input === "fall"){
//         fall = prompt("Choose a month! October, November, December").trim().toLowerCase().substring(0,3);
//             if(fall === "oct"){
//             answer = "Halloween is in October!";
//             }else if(fall === "nov"){
//             answer = "Thanksgiving is in November!";
//             }else if(fall === "dec"){
//             answer = "Christmas is in December!";
//             }
//
//     }else if (input === "winter"){
//         winter = prompt("Choose a month! January, February, March").trim().toLowerCase().substring(0,3);
//             if(winter === "jan"){
//             answer = "January is the start of a new year!";
//             }else if(winter === "feb"){
//             answer = "February has Valentine's Day! <3";
//             }else if(winter === "mar"){
//             answer = "March is known for St. Patrick's Day!";
//             }
//
//     }else {
//         answer = "You did not select a valid season!";
//     }
//     return answer;
// }
//
// alert(season(input));