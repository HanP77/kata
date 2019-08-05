// https://www.codewars.com/kata/54da5a58ea159efa38000836

// const A = [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ];
const A = [20, 1, 3 , 3, 1];

const findOdd = A => {

  for (let i = 0; i < A.length; i++) {
    let n = A[i]
    let counter = 0;

    A.forEach(element => {
      if (n === element) {
        counter += 1; 
      }
    });
    if (counter % 2 !== 0) return n
  }
}

const findOdd2 = A => {
  return A.find(int => {
    let counter = 0;

    A.forEach(element => {
      if (int === element) counter += 1;
    });
    if (counter % 2 !== 0) return int;
  })
}

// findOdd(A);
// console.log(findOdd2(A));


// Other solution
const findOdd3 = A => {
  var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
}

const findOdd4 = A => {
  //realy clever. Use XOR
  return A.reduce(function(c,v){return c^v;},0);
}

const findOdd5 = A => {
  //Like this one
  return A.find(item => A.filter(el => el == item).length % 2)
}