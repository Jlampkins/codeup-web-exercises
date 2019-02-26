"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isTen(number) {
    if(number === 10 && !(isNaN(number))){
        return true;
    }else {
        return false;

    }
}
/**answer**/
// function isTen(number){
//     return number === 10;
// }


function double(number){
    return number * 2;

}


/** **/
// function remove9s(array){
//     var output = [];
//     for (var i = 0; i < array.length; i++){
//         if(array[i] === 9){
//             var newarray = array.slice(array[i]);
//         }else {
//             return array;
//         }
//     }
//     return newarray;
// }

/** answer **/
function remove9s(array){
    var output =[];
    for(var i = 0; i <array.length; i++){
        if(array[i] !== 9){
            output.push(array[i]);
        }
    }
    return output;
}

var array = [1, 2, 9, true, 9, "9"];
console.log(remove9s(array));




function capitalizeName(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}


/** get last name to capital **/
function capitalizeAllNames(str) {
    // str = str.join(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str;
}



console.log(capitalizeAllNames(["james lampkins", "john", "jim"]));


function countVowels(str1){
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
    for(var i = 0; i < str1.length ; i++)
    {
        if (vowel_list.indexOf(str1[i]) !== -1)
        {
            vcount += 1;
        }
    }
    return vcount;
}

var workers = [
    {name: "Jim Halbert", sales: 100},
    {name: "Dwight, Schrute", sales: 50},
    {name: "Andy, Bernard", sales: 150},

];

function averageSales(workers){
    var sum = workers[0].sales + workers[1].sales + workers[2].sales;
    var average = sum / 3;
    for(var i = 0; 1 < workers.length; i++){

        return average;

    }
}


function analyzeWord(input){
    var output = {
        word: input,
        numberOfLetters: input.length,
        numberOfVowels: 3,
    };
    return output
}

var words = ["html", "css", "javascript"];
function analyzeAllWords(words){
    for(var i = 0; i < words.length; i++){

    }
}

function padArray(array, length, fill) {
    return length > array.length ? array.concat(Array(length - array.length).fill(fill)) : array; }