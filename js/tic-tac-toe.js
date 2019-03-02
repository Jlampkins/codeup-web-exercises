$(document).ready(function(){
   "use strict";
    // need to style


   var move = 1;
   var play = true;

   $(".box").on("click",function(){
       if($(this).text()==="" && play){     /** checks to see if the board can be claimed **/
           if(move % 2 === 1) {             /** checks to see how many moves have been made **/
               $(this).html("<h1>X</h1>");  /** if move is odd an X is placed.  If even an O is placed **/
           }else {
               $(this).append("<h1>O</h1>")
           }
           move++;
           if (checkForWinner()!== -1 && checkForWinner() !== "") {
               if (checkForWinner() === "X") {
                   $(".title").hide();
                   $(".button").on("click", function(){
                       location.reload();
                   })
                       .removeClass("restart");
                   $("#board").html("<h1>X's win!</h1>");


               } else if (checkForWinner() === "O") {
                   $(".title").hide();
                   $(".button").on("click", function(){
                       location.reload();
                   })
                       .removeClass("restart");
                   $("#board").html("<h1> O's win! </h1>");
               }
                play = false;
           } else if (checkForWinner() === -1 && move === 10){
               $(".title").hide();
               $(".button").on("click", function(){
                   location.reload();
               })
                   .removeClass("restart");
               $("#board").html("<h1>Looks like a draw</h1>");
           }


       }
    });



    function checkForWinner() {
        /** Grabbing what is entered in the box **/
        var space1 = $("#board .row:nth-child(1) .box:nth-child(1)").text();
        var space2 = $("#board .row:nth-child(1) .box:nth-child(2)").text();
        var space3 = $("#board .row:nth-child(1) .box:nth-child(3)").text();
        var space4 = $("#board .row:nth-child(2) .box:nth-child(1)").text();
        var space5 = $("#board .row:nth-child(2) .box:nth-child(2)").text();
        var space6 = $("#board .row:nth-child(2) .box:nth-child(3)").text();
        var space7 = $("#board .row:nth-child(3) .box:nth-child(1)").text();
        var space8 = $("#board .row:nth-child(3) .box:nth-child(2)").text();
        var space9 = $("#board .row:nth-child(3) .box:nth-child(3)").text();
        /** checking rows for match **/
        if      ((space1 === space2) && (space2 === space3)) { return space3; }
        else if ((space4 === space5) && (space5 === space6)) { return space6; }
        else if ((space7 === space8) && (space8 === space9)) { return space9; }
        /** checking columns for match **/
        else if ((space1 === space4) && (space4 === space7)) { return space7; }
        else if ((space2 === space5) && (space5 === space8)) { return space8; }
        else if ((space3 === space6) && (space6 === space9)) { return space9; }
        /** check diagonals for match **/
        else if ((space1 === space5) && (space5 === space9)) { return space9; }
        else if ((space3 === space5) && (space5 === space7)) { return space7; }
        // no winner
        return -1;
    }



});