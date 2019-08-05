// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup

const n = 8;
const s = 'UDDDUDUU';

// My solution
function countingValleys(n, s) {
  let sealevel = 0; // When we drop at -1 it's a valleys
  let watch = true; // But we need to go up to 0 to get another
  let valleys = 0; // Our result

  s
    .split('')
    .map(el => (el === 'U' ? 1 : -1))
    .forEach(element => {
      sealevel += element;
      if (!sealevel) { //Check if we are back up to 0
        watch = true;
      }
      if (watch && sealevel == -1) { //If up to 0 and drop again to -1 it's another valley
        watch = false;
        valleys++;
      }
    });
  return valleys;
}

console.log(countingValleys(n, s));

// Solution with simple for loop 
function countingValleysTwo(n, s) {
  let currLevel = 0;
  let valleys = 0;
  
  for (let i = 0; i < n; i++) {
      //update the current level
      if (s[i] === 'U') {
          currLevel += 1;
          if (!currLevel) {
              valleys += 1;
          }
      } else {
          currLevel -= 1;
      }
  }
  return valleys;
}