const cart = [2, 4, 6, 8, 9, 10];

function fixCart(cart){
  for(let i = 0; i < cart.length; i++){
    cart[i] *= 2;
  }
  return cart
}
console.log("The fix cart cost are:", fixCart(cart));