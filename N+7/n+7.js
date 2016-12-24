var srctxt;
var words;

function preload() {
  srctxt = loadStrings('rainbow.txt');
}

function setup() {
  noCanvas();
  srctxt = join(srctxt, ' ');
  words = splitTokens(srctxt, ' ,.!?');
  var seed = select('#seed');
  var submit = select('#submit');
  submit.mousePressed(function() {
  //  var phrase = n+7(seed.value(), words);
    createP(seed);
  });
}
//
// function n+7(seed, words) {
//
// }
