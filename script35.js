const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];

const firstName = "Lovelace";
const lastLetterOfLastName = firstName[firstName.length - 1];
const lastMyName = "Lovelace";
const secondToLastLetterOfLastName = lastMyName[lastMyName.length - 2];

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

const myArray = ["peanut butter", 1, "bread"];
const Array = [["Bulls", 23], ["White Sox", 45]];

const mySecondArray = [50, 60, 70];
let myData = mySecondArray [0];

const myThirdArray = [18, 64, 99];
myThirdArray[0] = 45;

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];

const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop()

const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

const myList = [
  ["Chocolate", 15],
  ["Cake", 29],
  ["Tea", 2],
  ["Milk", 3],
  ["Butter", 1]
];

function reusableFunction() {
  console.log("Hi World");
};
reusableFunction();

function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
};
functionWithArgs(3, 2);


