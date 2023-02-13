const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

golfScore(5, 4)

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      return answer = "alpha";
      break;
    case 2:
      return answer = "beta";
      break;
    case 3:
      return answer = "gamma";
      break;
    case 4:
      return answer = "delta";
  }
}
caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff"
  }

}

switchOfStuff(1);

function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
  }
}

sequentialSizes(1);

function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99:
      return "Missed me by this much!";
      break;
    case 7:
      return "Ate Nine";
      break;
    default:
      return ""
  }
}

chainToSwitch(7);

function isLess(a, b) {
  return a < b;
}
isLess(10, 15);

function abTest(a, b) {

  if (a < 0 || b < 0) {
    return undefined
  };
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

const myDog = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "friends": ["Water", "Dogs"]
};

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder"

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "bow-wow";

onst myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails

function phoneticLookup(val) {
  let result = "";
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

unction checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    artist: "Deep Purple",
    title: "Smoke on the water",
    release_year: 1976,
    formats: ["CD", "8T", "LP"]
  }
];

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside['glove box']

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function solution(str){
  return str.split("").reverse().join("");
}

const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i)
}

const myArray = [];
for (let i = 1; i < 10; i+=2) {
  myArray.push(i);
}

const myArray = [];
for (let i = 9; i > 0; i -=2) {
  myArray.push(i)
}

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i]
}

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++)
      product = product * arr[i][j]}
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);