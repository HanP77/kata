// Reverse a string

// Using recursion
function reverse( str ) {
  if ( str.length <= 1 ) {
    return str;
  }
  return reverse( str.substr( 1 ) ) + str[ 0 ];
}

// FP
function reverseTwo(str) {
  return str.split('').reverse().join('');
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
