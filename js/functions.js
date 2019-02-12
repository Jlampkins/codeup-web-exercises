"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
    // function sayHello(name) {
    //     return "hello " + name;

// }
    //function expression -- alternate syntax for defining function
    // var sayHello = function(name) {
    // return "Hello, "+ name;
    // };



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// var helloMessage = sayHello ("James");
// console.log(helloMessage);



/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// var myName = "James";
// console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

//  function isTwo(num) {
//      return num === 2
// }
//
// console.log(random);
// console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

//function is set to allow percentage and rounded to two decimal places for currency

// function calculateTip(tipPer, bill) {
//     return tipPer * bill;
// }
//     console.log(calculateTip(0.20, 20));
//     console.log(calculateTip(0.25, 25.50));
//     console.log(calculateTip(0.15, 33.42));



/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// var billamount = parseInt((prompt("What is the bill total?")).replace("$",""));
// var tipamount = parseInt((prompt("What percentage would you like to tip?")).replace("%",""));
// var formatTip = calculateTip(tipamount/100, billamount).toFixed(2);
//
// alert("You should tip $" + formatTip);


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// var discPer = Math.random();

// function applyDisc(priceB4disc, discPer) {
//     return priceB4disc - (priceB4disc * discPer);
// }
//
// console.log(applyDisc(100, .25));

/**BONUS!!**/
//Make a function named isOdd(number)
// function isOdd(number) {
//     return number % 2 === 1;
// }
// console.log("number is " + isOdd(2));

// Make a function named isEven(number)
// function isEven(number) {
//     return number % 2 === 0;
//
// }
// console.log("number is " + isEven(1));

/**Make a function named identity(input) that returns the input exactly as provided. **/
// function identity(input) {
//     return input;
// }
// console.log(identity("things"));

//Make a function named isFive(input)
// function isFive(num) {
//     return num === 5;
// }
// console.log(isFive(4));

/** Make a function named addFive(input) that adds five to some input. **/
// function isFives(input) {
//     return 5 + input;
// }
// console.log(isFives(6));
/** Make a function named isMultipleOfFive(input) **/
// function isMultipleOfFive(num) {
//     return num % 5 === 0;
// }
// console.log(isMultipleOfFive(30));
// console.log(isMultipleOfFive(8));
/** Make a function named isThree(input) **/
// function isThree(num) {
//     return num === 3;
// }
// console.log(isThree(4));
// console.log(isThree(3));

/** Make a function named isMultipleOfThree(input) **/
// function isMultipleOfThree(num) {
//     return num % 3 === 0;
// }
// console.log(isMultipleOfThree(5));
// console.log(isMultipleOfThree(15));

/** Make a function named isMultipleOfThreeAndFive(input) **/
// function isMultipleOfThreeandFive(num) {
//     return num % 3 === 0 && num % 5 === 0;
// }
// console.log(isMultipleOfThreeandFive(45));
// console.log(isMultipleOfThreeandFive(6));

/** Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n **/
// function isMultipleOf(target, n){
//     return target % n === 0
// }
// console.log(isMultipleOf(10, 4));
// console.log(isMultipleOf(15, 5));

/** Make a function named isTrue(boolean) **/
// function isTrue(boolean) {
//     return boolean === true;
// }
// console.log(isTrue(3));
//
// function isFalse(boolean) {
//     return boolean && false;
// }
// console.log(isFalse(2));

// function isTruthy(input) {
// }
// console.log(isTruthy(0));

// /** Make a function called returnTwo() that returns the number 2 when called
//  Test this function with console.log(returnTwo()) **/
// function returnTwo(){
//     return 2
// }console.log(returnTwo());
//
/** Make a function called sayHowdy() which console.logs the string “Howdy!”
 Test this function by directly calling sayHowdy()**/
function sayHowdy(){
    return "Howdy!";
}
console.log(sayHowdy());
//
// /** Make a function called returnName() that returns the string of your name
// Test this function with console.log(returnName())**/
// function returnName(){
//     return "James";
// }console.log(returnName());
//
// /**Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))**/
// function addThree(num) {
//     return num + 3;
// }console.log(addThree(5));
//
// /**Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))**/
// function sayString(input){
//     return input;
// }console.log(sayString("codeup"));

// /**Write a function called identity(input) that takes in an argument called input
//  and returns that input.**/
// function indentity(input) {
//     return input;
// }console.log(indentity("wut"));
//
// /**Write a function called getRandomNumber(min, max) that returns a random number
// between min and max values sent to that function call.**/
// function getRandomNumber(min,max){
//     return Math.floor(Math.random() * max + min);
// }console.log(getRandomNumber(1, 10));
//
// /**Write a function called first(input) that returns the first character in the
// provided string**/
// function first(input){
//     return input.substring(0, 1);
// }console.log(first("What is this!?"));
//
// /**Write a function called last(input) that returns the last character of a string**/
// function last(input){
//     return input.substring(input.length - 1);
// }console.log(last("What is this?!"));
//
// /**Write a function called rest(input) that returns everything but the first
// character of a string.**/
// function rest(input){
//     return input.substring(1);
// }console.log(rest("What is this?!"));
//
// /**Write a function called reverse(input) that takes a string and
//  returns it reversed.**/
// function reverse(input){
//     return input.split("").reverse().join("");
// }console.log(reverse("WHAT IS THIS?!"));

