// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// const arr = [ [ 1, 1, 1, 0, 0, 0 ],
//               [ 0, 1, 0, 0, 0, 0 ],
//               [ 1, 1, 1, 0, 0, 0 ],
//               [ 0, 0, 2, 4, 4, 0 ],
//               [ 0, 0, 0, 2, 0, 0 ],
//               [ 0, 0, 1, 2, 4, 0 ] ]

const arr = [[-1, -1, 0, -9, -2, -2],
            [-2, -1, -6, -8, -2, -5],
            [-1, -1, -1, -2, -3, -4],
            [-1, -9, -2, -4, -4, -5],
            [-7, -3, -3, -2, -9, -9],
            [-1, -3, -1, -2, -4, -5]]

function hourglassSum(arr) {
  let result;
  let lineArray = [];
  let finalArray = [];

  arr.forEach(el => {
    for(let i = 0; i < el.length - 2; i++) {
      let first = el[i] + el[i + 1] + el[i +2];
      lineArray.push(first);
    }
    finalArray.push(lineArray)
    lineArray = [];
  });
  
  for(let x = 0, y = 0, i = 0; i < 16; i++) {
    let calc = finalArray[y][x] + finalArray[y + 2][x] + arr[y + 1][x+1];
    if(calc > result || result === undefined) {
      result = calc;
    }

    x++

    if(x == 4) {
      x = 0
      y++
    }
  }
  
  return result;
}

// Nice solution
function hourglassSumTwo(arr) {
  // we could set this to 3 given the problems constraings, but this allows changes
  maxX = 3; // + (arr[0].length % 3)
  maxY = 3; // + (arr.length % 3)
  total = -Infinity;  // has to be -64, but

  // begin at y == 0
  for (let y = 0; y <= maxY; y++) {
      for (let x = 0; x <= maxX; x++) {
          // sum the top of hourglass
          let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];

          // get the middle of hourglass
          sum += arr[y+1][x+1];

          // sum the bottom of hourglass
          sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]

          // don't store result to keep space complexity down
          if (total < sum) {
            total = sum;
          }
      }
  }
  
  return total;
}

console.log(hourglassSum(arr));