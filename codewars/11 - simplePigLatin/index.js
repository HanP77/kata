// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// const str = 'Pig latin is cool';
const str = 'O tempora o mores !';

function pigIt(str){
  return str.split(' ').map(x => {
    return (x !== '!' && x !== '?') ? x.slice(1) + x[0] + 'ay' : x;
  }).join(' ');
}

console.log(pigIt(str));

// Best solution.

// function pigIt(str) {
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

//Need to do more regex
