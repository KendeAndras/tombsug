/*
* File: app.js
* Author: 2022, Korcsmaros Kende Andras
* Copyright: 2022, Korcsmaros Kende Andras
* Group: Szoft 2/N
* Date: 2022-11-26
* Github: https://github.com/KendeAndras/
* License: GNU GPL
*/
var calcButton = document.querySelector("#calcButton");
var Alpha = document.getElementById("alpha");
var Side = document.getElementById("side");
var Radius = document.getElementById("radius");
var result = "";
function calcRadius(alpha, side) {
    this.result = 0.5 * (side * Math.sin(alpha));
}
calcButton.addEventListener("click", function () {
    calcRadius(+Alpha.value, +Side.value);
    Radius.innerHTML = result;
});
