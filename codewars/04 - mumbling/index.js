// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

let string = 'PLukkI';

function accum(s) {
  let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        regex = /^[a-z]/;
        if (regex.test(arr[i])) {// Regex inutile. Autant toUpperCase dans tout les cas
          arr[i] = arr[i].toUpperCase();
        }
          arr[i] += arr[i].toLowerCase().repeat(i);
    }
  let result = arr.join('-');
  return result
}
// Other solutions

function accumtwo(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accumThree(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}


accum(string);




