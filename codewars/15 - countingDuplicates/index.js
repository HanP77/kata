// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

const input = 'iiAAb';

function duplicateCount(text) {
  var array = text.toLowerCase().split('');
  var counter = 0;
  array.forEach(element => {
    if (array.filter(el => el == element).length > 1) {
      array = array.filter(el => el !== element);
      counter++;
    }
  });
  return counter;
}

// Better
function duplicateCountTwo(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function(val, i, arr) {
      console.log(val, i, arr);
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
console.log(duplicateCountTwo(input));

