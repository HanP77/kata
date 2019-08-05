// https://www.codewars.com/kata/523f5d21c841566fde000009

const a = [1, 2, 2, 4, 2, 1, 3, 3]
const b = [2, 3]

function array_diff(a, b) {
  let c = []
  a.forEach(item => b.filter(el => el == item).length === 0 && c.push(item));
  return c;
}

const array_diff2 = (a, b) => {
  return a.filter(el => b.indexOf(el) == -1)
}

console.log(array_diff2(a, b));
