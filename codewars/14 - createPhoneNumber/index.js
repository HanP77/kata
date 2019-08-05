// https://www.codewars.com/kata/525f50e3b73515a6db000b83

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  numbers.splice(0, 0, '(');
  numbers.splice(4, 0, ')', ' ');
  numbers.splice(9, 0, '-');
  return numbers.join('');
}

// Clever
function createPhoneNumberTwo(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

// Same with FP
function createPhoneNumberThree(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

console.log(createPhoneNumber(list));
