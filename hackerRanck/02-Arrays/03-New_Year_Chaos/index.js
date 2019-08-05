// https://www.hackerrank.com/challenges/new-year-chaos/forum/comments/143969

const line = [ 2, 1, 5, 3, 4 ];
// const line = [1, 2, 5, 3, 7, 8, 6, 4];
// const line = [ 2, 5, 1, 3, 4 ];

// In progress
function minimumBribes(q) {
  const n = q.length
  const original = []
  let result = 0;

  for (let i = 1;  i <= n; i++) {
    original.push(i)
  }

  for (let i = 0; i <= n; i++) {
    var toBeCompared = q[i];

    for (let k = i ; k <= n; k++) {

      if(original[k] === toBeCompared) {
        let bribe = Math.abs(i-k); 

        if(bribe > 2) {
          return `Too chaotic`
        }

        result += bribe;
      }
    }
  }  
  return result;
}


console.log(minimumBribes(line));