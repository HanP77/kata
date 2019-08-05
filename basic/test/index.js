
function test() {
  var test = {
    some: 'object',
    to: 'test',
  };

  var arr = Array.from(test);
  var arrTwo = Array.from('test');

  console.log(arr);
  console.log(arrTwo);
  // return Array.from({some: 'object'})
}

// console.log(test());