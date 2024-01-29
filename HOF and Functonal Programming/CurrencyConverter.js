// The goal is to make a application which takes the list of items and prices stored in a object and returns a new object with prics in Indian National Rupee. Map hof method is to be used here.

const cart = {
  fridge: 250.99,
  LEDTV: 150.99,
  Laptop: 300.99,
  Keybord: 150.99,
};

let exchangeRate = 80;

let itemInRupees = Object.keys(cart).map((item) =>{
  return {item:cart[item] * exchangeRate};
});
console.log(itemInRupees);