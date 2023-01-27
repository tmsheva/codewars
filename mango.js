// https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price) {
  let normalQuantity = quantity - Math.floor(quantity / 3);
  return normalQuantity * price;
}
