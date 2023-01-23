// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

/**
 * Проверяет к какому кварталу относится месяц.
 *
 * @param {number} month - число месяца в году.
 *
 */
const quarterOf = (month) => {
  if (month <= 12 && month >= 1) {
    return month <= 3
      ? 1
      : month <= 6
      ? 2
      : month <= 9
      ? 3
      : month <= 12
      ? 4
      : "Invalid entry";
  }
  return "Enter a valid number";
};
