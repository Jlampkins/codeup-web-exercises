(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    // var names = ["Adrien", "Jeremy", "Bethany", "James"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for(var x = 0; x < names.length; x++){
    //     console.log("Hello, I am " + names[x]);
    // }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(function(element){
    //     console.log("Hello I am, " + element);
    // });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    // function first(input){
    //     var firstName = input.slice(0)[0];
    //     console.log(firstName);
    // }
    // first(names);
    //
    // function second(input){
    //     var secondName = input.slice(1)[0];
    //     console.log(secondName);
    // }
    // second(names);
    //
    // function last(input){
    //     var lastName = input.slice(-1)[0];
    //     console.log(lastName);
    // }
    // last(names);
    //
    // console.log(names);


    /** BONUS!!! **/

    /**1.	create an array of shapes
–	prompt the user to search for a specific shape
–	using a for loop, iterate through the array to log the shapes until the matching
    shape is found
–	once the shape is found, log a message (“Shape is found”) and use a break
    statement to exit loop.**/

    // var shapes = ["circle", "square", "triangle", "rectangle"];
    // var answer = prompt("What shape do you wanna find?");
    //
    // for(var x = 0; x < shapes.length; x++){
    //     if(answer === shapes[x]){
    //         console.log("I have located " + answer);
    //         break;
    //     }
    //     console.log(shapes[x]);
    // }

    /**2.	Create a function that returns a random day of the week**/



// function randomDay(){
//         var daysOfWeek = [
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//             "Sunday"
//         ];
//     var day = daysOfWeek[Math.floor(Math.random()* daysOfWeek.length)];
//     console.log(day);
// }
// randomDay();

    /**3.	Create a function that takes a single letter and returns what number the
    letter is in the alphabet. Ignore case.**/
    // function letterNumber(letter) {
    //     var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //
    //     for(var x = 0; x < alpha.length; x++) {
    //         return letter[x]
    //     }
    // }

    /** 4.	Create a function that returns the longest string in a given array of
    string elements.**/

    // function longest();

     /**5.	 Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.**/

     /** 6.	Write a function that returns the sum of an array of numbers**/



         var arrayNum = [1, 2, 3, 4, 5, 6, 7].reduce(add, 0);
         function add(a, b){
             return a + b;
         }


    console.log(arrayNum);

     /**7.	Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
        1) add a student
    2) delete a student
    3) view all students in alphabetical order
    4) view all students in reverse alphabetical**/


})();
