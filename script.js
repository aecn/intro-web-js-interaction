// JAVASCRIPT

// declare variables
var heading;
var description;
var deliverButton;
var output;
var input;
var cont;

// declare array
var quotes = [
  "you can do anything you set your heart to!",
  "you are so important and you matter!",
  "your mistakes don't define you!",
  "your best is enough!",
  "keep going!",
  "you are doing amazing!",
  "be gentle with yourself!",
  "you deserve the universe, don't settle for less!",
  "i'm proud of you!",
  "you can do it!",
  "i believe in you!",
  "you are incredible!",
  "you are brilliant!"
];

// only executes once the document is ready
window.addEventListener('DOMContentLoaded', function() {

  heading = document.getElementById("title");
  description = document.getElementById("desc");
  deliveryButton = document.getElementById("button");
  output = document.getElementById("outputText");
  input = document.getElementById("input");
  cont = document.getElementById("container");

  deliveryButton.addEventListener("click", delivery);

});

// Function
function delivery() {

  // random item from array
  var randomQuote = Math.floor(Math.random() * quotes.length);

  // input name
  var inputText = input.value;
  // generate positivity
  output.innerText =  inputText + "," + " " + (quotes[randomQuote]);

  // css changes
  //  random text color
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;

  // console records color changes
  var outputColorString = "rgb(" + r + "," + g + "," + b + ")";
  console.log(outputColorString);

  // random color
  heading.style.color = outputColorString;
  desc.style.color = outputColorString;

  // underline
  heading.style.textDecoration = "underline";

  // text shadow
  heading.style.textShadow = "5px 5px 1px #fff,10px 10px 1px #ff477e";

  // random border color
  cont.style.borderColor = outputColorString;

  /// Modifying classes
  console.log("Class list BEFORE:");
  console.log(heading.classList);

  heading.classList.toggle("title");

  console.log("Class list AFTER:");
  console.log(heading.classList);
}
