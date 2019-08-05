// Binary search in JS

// Array NEED to be SORTED

let N = 200; 
let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

let numberSearched = 37;


const binarySearch = (arr, x) => {
  // in the first loop we search the all array
  let start = 0; // starting at 0
  let end = arr.length -1; // finishing at the end of the array

  while(start<=end) {
    // find the mid index
    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === x) return `number '${arr[mid]}' find in index ${mid}`;

    if(arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return `Number not find`;
}

// console.log(binarySearch(exampleArray, numberSearched));

// Using recursion
function binarySearchRecursion(arr, x, start, end) {

  console.log(arr);

  if (start > end) return `Number not find`;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) return `number '${arr[mid]}' find in index ${mid}`;

  if (arr[mid] > x) {

    return binarySearchRecursion(arr, x, start, mid - 1)
  } else {
    
    return binarySearchRecursion(arr, x, mid + 1, end)
  }
}

console.log(binarySearchRecursion(exampleArray, numberSearched, 0, exampleArray.length - 1));

