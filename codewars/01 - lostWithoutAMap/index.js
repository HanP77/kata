// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

let arrayOne = [4, 1, 1, 1, 4];

function maps(x){
    for (let i=0; i < x.length ; i++) {
          x[i] = x[i] * 2  ;
    }
    return x
  }

// FP FTW
function mapsTwo(x){
    return x.map(i => i*2)
};

  let testOne = maps(arrayOne);
  let testTwo = maps(arrayOne);

