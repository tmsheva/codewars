// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

// Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении:

function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((item) => !geese.includes(item));
}
