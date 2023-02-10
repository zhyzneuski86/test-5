const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var myOutfit = "sweater"
  var outerWear = myOutfit
  // Only change code above this line
  return outerWear;
}

myOutfit();

let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum += 5;
}
addThree();
addFive();

let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed)