// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

function past(h, m, s) {
  if (h >= 0 && h <= 23) {
    if (m >= 0 && m <= 59) {
      if (s >= 0 && s <= 59) {
        h = h * 60 * 60 * 1000;
        m = m * 60 * 1000;
        s = s * 1000;
        return h + m + s;
      }
    }
  }
}
