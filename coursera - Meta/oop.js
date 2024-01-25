// // Functional programming paradigm vs OOP programming paradigm.
// // Demo of functional programming
// const shoePrice = 20;
// const stateTax = 1.2;

// const totalPrice = (price, tax) => {
//   return price * tax;
// }

// const toPay = totalPrice(shoePrice, stateTax);
// console.log(toPay);

// // same but OOP paradigm
// const purchase1 = {
//   shoePrice: 20,
//   stateTax: 1.2,
//   totalPrice: function () {
//     const totalPrice = this.shoePrice * this.stateTax;
//     console.log('totalPrice:', totalPrice);
//   }
// }

// purchase1.totalPrice();

// const purchase2 = {
//   shoePrice: 50,
//   stateTax: 1.2,
//   totalPrice: function () {
//     const totalPrice = this.shoePrice * this.stateTax;
//     console.log('totalPrice:', totalPrice);
//   }
// }

// purchase2.totalPrice();

// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
    super(name, age, energy)
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  doSomethingFun() {
    super.doSomethingFun;
  }
  sleep() {
    super.sleep;
  }
  goToWork() {
    super.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  var intern = new Worker();
  intern.name = "Bob";
  intern.age = 21;
  intern.energy = 110;
  intern.xp = 0;
  intern.hourlyWage = 10;
  intern.goToWork();

  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  var manager = new Worker();
  manager.name = "Alice";
  manager.age = 30;
  manager.energy = 120;
  manager.xp = 100;
  manager.hourlyWage = 30;
  manager.doSomethingFun();

  return manager;
}

console.log(intern());
console.log(manager());

