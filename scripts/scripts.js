
$(document).ready(function(){
    // your script here
    // alert("Hello world!");

// COLOR CONVERSION FOR NAVBAR
var counter = 0;
var colors = [
    "#eeeeee",
    "#00ff00",
    "#ff0000",
    "#000000"];

var $div = $('#my-header-style');
console.log($div);
var interval;
$('#my-header-style').mouseenter(function () {
    interval = window.setInterval(changeColor, 10); //set the interval of 1 sec for image to change while hovered.

}).mouseleave(function () {
    // alert("I was clicked");
    window.clearInterval(interval); //clear the interval on mouseOut.
});

function changeColor() {
    var color = colors.shift();
    colors.push(color);
    $div.css({
        "color": color
    });
    console.log(colors + "I've changed color to " + colors);

}
 });
 