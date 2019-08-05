// https://www.codewars.com/kata/5264d2b162488dc400000001

// const str = 'this is another test';
const str = 'Welcome';

function spinWords(str) {
  return str
    .split(' ')
    .map(string => {
      return string.length >= 5 ? string.split('').reduce((rev, char) => char + rev) : string;
    })
    .join(' ');
}

console.log(spinWords(str));

// Best solution
function spinWords2(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
