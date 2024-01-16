// console.log('connected');
// loop thru arrays
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
