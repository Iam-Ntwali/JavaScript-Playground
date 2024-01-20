// console.log('connected');
// loop thru arrays
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

// function listArrayItems(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(`Color ${i + 1} in Colors Array is ${arr[i]}`) //display the array item where the index is euqal to i
//   }
// }
// listArrayItems(colors);

// EXERCISES PRACTICE
// function letterFinder(word, match) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === match) {
//       console.log(`found the match ${match} at Index ${i}`);
//     } else {
//       console.log(`--No match found at ${i}`);
//     }
//   }
// }

// letterFinder('test', 't');

// OBJECTS
// const clothes = [];
// clothes.push('pants', 'hoddies', 'T-Shirt', 'Polo', 'Short');
// console.log(clothes);
// clothes.pop();
// console.log(clothes);
// clothes.push('long pants');
// console.log(clothes);
// console.log(clothes[2]);

// const favCar = {};
// console.log(favCar);
// favCar.color = 'Black';
// console.log(favCar);
// favCar.covertible = 'Nissan';
// console.log(favCar);

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

addTwoNums(5, 5);