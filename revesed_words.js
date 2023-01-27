// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str) {
  return (str = str.split(" ").reverse().join(" "));
}

reverseWords("1 22 333 444");
