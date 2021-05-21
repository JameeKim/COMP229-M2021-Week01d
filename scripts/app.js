"use strict";

(function () {
    function start() {
        let myVariable = 10;
        console.log(`My number is: ${myVariable}`);

        for (let index = 0; index < myVariable; index++) {
            console.log(`Your number is ${index}`);
        }
    }

    window.addEventListener("load", start);
})();
