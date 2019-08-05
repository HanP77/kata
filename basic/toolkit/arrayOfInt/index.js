// How to generate an array of N int 

let N = 101;
let exampleArray = Array.apply(null, {length: N}).map(Number.call, Number);

console.log(exampleArray);