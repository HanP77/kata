// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

const arr = [1, 2, 3, 4, 3, 2, 1];
// const arr = [20,10,-80,10,10,15,35];
// const arr = [1,100,50,-51,1,1];
// const arr = [1,50,3];

const findEvenIndex = arr => {
  let n = 0;

  const left = n => {
    let sumLeft = 0;

    for (let i = 0; i < n; i++) {
      sumLeft += arr[i];
    }

    return sumLeft;
  };

  const right = n => {
    let sumRight = 0;

    for (let i = arr.length - 1; i > n; i--) {
      sumRight += arr[i];
    }

    return sumRight;
  };

  if (right(n) === 0) {
    return (n = 0);
  } else {
    for (let n = 1; n < arr.length; n++) {
      let sumLeft = left(n);
      let sumRight = right(n);
      if (sumLeft === sumRight) return n;
      if (n === arr.length - 1) return -1;
    }

    return n;
  }
};

// console.log(findEvenIndex(arr));
// findEvenIndex(arr)

function bestSolution(arr) {
  var left = 0,
    right = arr.reduce(function(pv, cv) {
      return pv + cv;
    }, 0);

  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}

console.log(bestSolution(arr));
