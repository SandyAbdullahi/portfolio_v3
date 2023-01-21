
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
 

//  LOGO
   // Get the canvas element
   var canvas = document.getElementById("myCanvas");
   // Check if the canvas is supported on the browser
   if (canvas.getContext) {
       // Get the 2D rendering context
       var ctx = canvas.getContext("2d");
       // Draw a rectangle
       ctx.fillStyle = "#5e5e5e";
       ctx.fillRect(0, 0, 50, 50);
       // Draw a circle
       ctx.beginPath();
       ctx.arc(25, 25, 20, 0, 2 * Math.PI);
       ctx.fill();
       // Draw lines
       ctx.beginPath();
       ctx.moveTo(25, 0);
       ctx.lineTo(25, 50);
       ctx.moveTo(0, 25);
       ctx.lineTo(50, 25);
       ctx.stroke();
       // Draw a cloud
       ctx.beginPath();
       ctx.arc(35, 10, 10, 0, Math.PI, true);
       ctx.arc(15, 10, 10, 0, Math.PI, true);
       ctx.arc(25, 20, 15, 0, Math.PI, true);
       ctx.fill();
   }