var slider;
// Variable to keep track of slider value (a bit redundant)
var percent = 5;

// Many DOM elements
var input, button, clearButton;

// An array to keep track of all the new DOM elements being added
var paragraphs = [];

var inputText = '';

var srctxt ;
var txt ;
function preload() {
  srctxt = loadStrings("rainbow.txt");
}
function setup() {

  noCanvas();
  txt = srctxt.join('\n');
  input.html(txt);
  button = select('#submit');
  // What to do when button pressed
  button.mousePressed(handleInput);

  // Slider
  slider = select("#percentslider");
  slider.input(changePercent);





  // This button clears the new paragraph elements
  // added
  clearButton = select('#clear');
  clearButton.mousePressed(clearText);
}




// Handle the text input field
function handleInput() {
  process(input.value());
}

// Clear all the divs with remove()
function clearText() {
  input.html('');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].remove();
  }
  paragraphs = [];
}

// Handle event when slider changes
function changePercent() {
  var span = select('#percent');
  // Set global variable for use
  percent = slider.value();
  // Update the span element to display in browser
  span.html(percent);
}
