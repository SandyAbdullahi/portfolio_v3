
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
        var rotation = 0;
        //Animate the logo
        setInterval(animate, 100);
        function animate() {
            ctx.clearRect(0, 0, 50, 50);
            ctx.save();
            ctx.translate(25, 25);
            ctx.rotate(rotation);
            ctx.translate(-25, -25);
            // Draw a rectangle
            ctx.fillStyle = "#00b8d4";
            ctx.fillRect(0, 0, 50, 50);
            // Draw a circle
            ctx.beginPath();
            ctx.arc(25, 25, 20, 0, 2 * Math.PI);
            ctx.fill();
            // Draw lines
            ctx.beginPath();
            ctx.moveTo(10, 10);
            ctx.lineTo(40, 40);
            ctx.moveTo(40, 10);
            ctx.lineTo(10, 40);
            ctx.stroke();
            // Draw a triangle
            ctx.beginPath();
            ctx.moveTo(25, 0);
            ctx.lineTo(40, 25);
            ctx.lineTo(10, 25);
            ctx.fill();
            // Draw a semicircle
            ctx.beginPath();
            ctx.arc(25, 25, 20, 0, Math.PI, true);
            ctx.fill();
            ctx.restore();
            rotation += Math.PI / 180;
        }
    }