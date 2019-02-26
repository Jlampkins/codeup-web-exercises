var inputOne = document.getElementById("firstNum");
var operator = document.getElementById("secondNum");
var inputThree = document.getElementById("thirdNum");

// var clear = document.getElementById("clear");
// var negative = document.getElementById("negative");
// var percent = document.getElementById("percent");
//
var numBtn = document.getElementsByClassName("numbers");
var operandBtn = document.getElementsByClassName("operand");
// var operBtn = document.getElementsByClassName("operatorClass");
// var specialBtn = document.getElementsByClassName("special");


// var leftInput = function(btn){
//     inputOne.value += btn.value;
// };
//
// var whatisthis = function(){
//     inputThree.value = this.value;
// };

/** Left Number Events **/

for(var i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", getNumValue, false);
};
function getNumValue (event){
    inputOne.setAttribute("value", this.getAttribute("value"));
};


/** Operator Events **/
for(var i = 0; i < operandBtn.length; i++) {
    operandBtn[i].addEventListener("click", getOperand, false);
};
function getOperand (event){
    operator.setAttribute("value", this.getAttribute("value"));

};

/** Right Number Event ***BROKEN*** **/
// for(var i = 0; i < numBtn.length; i++) {
//     numBtn[i].addEventListener("click", getNumValue, false);
// };
// function getNumValue (event){
//     inputThree.setAttribute("value", this.getAttribute("value"));
// };
















// var leftInput = function(btn){
//     inputOne.value += btn.value;
// };
//
// var inputTwo = function(){
//     inputThree.value = this.value;
// };
//
// var path = function () {
//     if (inputThree.value === "") {
//         leftInput (this);
//     } else if (inputOne.value !== "" && inputThree.value !== "") {
//         inputTwo (this);
//     }
// };

