// Functional programming paradigm vs OOP programming paradigm.
// Demo of functional programming
const shoePrice = 20;
const stateTax = 1.2;

const totalPrice = (price, tax) => {
  return price * tax;
}

const toPay = totalPrice(shoePrice, stateTax);
console.log(toPay);

// same but OOP paradigm
const purchase1 = {
  shoePrice: 20,
  stateTax: 1.2,
  totalPrice: function () {
    const totalPrice = this.shoePrice * this.stateTax;
    console.log('totalPrice:', totalPrice);
  }
}

purchase1.totalPrice();

const purchase2 = {
  shoePrice: 50,
  stateTax: 1.2,
  totalPrice: function () {
    const totalPrice = this.shoePrice * this.stateTax;
    console.log('totalPrice:', totalPrice);
  }
}

purchase2.totalPrice();