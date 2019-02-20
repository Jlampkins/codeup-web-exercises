(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () {
            return Math.PI * Math.pow(this.radius, 2);
            // TODO: complete this method
            // hint: area = pi * radius^2
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding === true){
                return "Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea(doRounding));
            }else {
                return "Area of a circle with radius: " + this.radius + ", is: " + circle.getArea(doRounding);
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number ");
    console.log(circle.logInfo(true));

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));
})();


/** create a MyMath.roundPi(digits) which returns PI rounded to a given number of digits. **/
// var MyMath = {
//     roundPI: function(digits){
//         Math.round(Math.PI) === digits
//     }
// };
// console.log(MyMath.roundPI(4));

