console.log('connected');
//loop thru arrays
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(`Color ${i + 1} in Colors Array is ${arr[i]}`) //display the array item where the index is euqal to i
  }
}
listArrayItems(colors);

// EXERCISES PRACTICE
function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log(`found the match ${match} at Index ${i}`);
    } else {
      console.log(`--No match found at ${i}`);
    }
  }
}

letterFinder('test', 't');

// OBJECTS
const clothes = [];
clothes.push('pants', 'hoddies', 'T-Shirt', 'Polo', 'Short');
console.log(clothes);
clothes.pop();
console.log(clothes);
clothes.push('long pants');
console.log(clothes);
console.log(clothes[2]);

const favCar = {};
console.log(favCar);
favCar.color = 'Black';
console.log(favCar);
favCar.covertible = 'Nissan';
console.log(favCar);

// Error prevention in JS
function addTwoNums(a, b) {
  try {
    if (typeof a !== 'number') {
      throw new ReferenceError('first argument is not a number');
    }
    else if (typeof b !== 'number') {

      throw new ReferenceError('second argument is not a number');

    } else {
      console.log(a + b);
    }
  } catch (e) {
    console.log('Error!', e);
  }
}

addTwoNums(5, '5');

// DEFENSIVE PROGRAMMING
function letterFinder(word, match) {
  const conditional1 = typeof (word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
  const conditional2 = typeof (match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1

  if (conditional1 && conditional2) { //if both condition matches
    for (let i = 0; i < word.length; i++) {
      if (word[i] === match) { //check if the character at this i position in the word is equal to the match
        console.log(`found the match ${match} at Index ${i}`);
      } else {
        console.log(`--No match found at ${i}`);
      }
    }
  } else {
    //if the requirements don't match
    console.log('Please pass correct arguments to the function');
  }
}

letterFinder(2, 1);

//PROGRAMMING PARADIGMS //
//Functional Programming
//First class functions
function addTwoNums(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}

function randomNum() {
  return Math.floor((Math.random() * 10) + 1);
}
function specificNum() {
  var specificNum = Number(prompt("Enter a number:"));
  return specificNum
};

var useRandom = true;

var getNumber;

if (useRandom) {
  getNumber = randomNum
} else {
  getNumber = specificNum
}

addTwoNums(getNumber(), getNumber());

// Higher-order functions
function colorStyler(color, background, fontSize, txt) {
  var message = "%C" + txt;
  var style = `color: ${color};`
  style += `background: ${background};`
  style += `font-size: ${fontSize};`
  console.log(message, style);
}

function celebrateStyler(reason) {
  var fontStyle = `color: "tomato"; font-size:50px`;
  if (reason == "birthday") {
    console.log(`%Happy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%Congrats on the title`, fontStyle);
  } else {
    console.log(message, fontStyle);
  }
}

colorStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

function styleAndCelebrate(color, background, fontSize, txt, reason) {
  colorStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');