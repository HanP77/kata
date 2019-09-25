// Reverse a string

// Basic
function reverse(str) {
  return str.split('').reverse().join('');
}

// Using recursion
function reverseTwo(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverse(str.substr(1)) + str[0];
}

// For loop
function reverseThree(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Using reduce
function reverseFour(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// console.log(reverse('MaisOuEstDoncOrNicar?'));
