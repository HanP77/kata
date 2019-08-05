//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

// const c = [0, 0, 0, 0, 1, 0]
const c = [0, 0, 0, 1, 0, 0]

function jumpingOnClouds(c) {
  let result = 0;
  for(let i=0; i < c.length -1;) {
    c[i + 2] == 0 ? i += 2 : i++; 
    result++
  }
  return result;
}

console.log(jumpingOnClouds(c));