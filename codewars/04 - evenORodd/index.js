// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function evenOrOdd(number) { //my solution
  var calc = number % 2;
  if (calc === 0) {
  return 'Even'
  } else {
  return 'Odd'
  }
}


function even_or_odd(number) { //Best solution

  return number % 2 ? "Odd" : "Even"
}

console.log(even_or_odd(5));