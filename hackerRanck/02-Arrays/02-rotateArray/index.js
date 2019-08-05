// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&h_r=next-challenge&h_v=zen&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays

const a = [1, 2, 3, 4, 5];
const d = 6;

function rotLeft(a, d) {
  for(let i = 0; i < d; i++){
    a.push(a.shift());
  }
  return a;
}

console.log(rotLeft(a, d));