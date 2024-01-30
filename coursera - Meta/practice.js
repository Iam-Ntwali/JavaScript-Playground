console.log('hello');

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = number.map((item) => item * 2); //map method
// console.log(result);
const result2 = number.forEach(item => {
  console.log(item * 2);
}); // forEach method
result2

const result3 = number.filter(item => item % 2 === 0); // filter method
console.log(result3);

const name = 'Good Morning and Hello World';

const result4 = name.split('');
const removeDuplicates = new Set(result4);
console.log(removeDuplicates);

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);