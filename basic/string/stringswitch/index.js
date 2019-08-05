const arr = ['AbiZ', 'asdl;ghlsdfg', 'aslduifhasldfhjadsf'];

const reverse = (str) => {
  const result = '';
  const secondLetter = str.slice(str.length -1);
  const corps = str.slice(1, str.length -1);
  const firstLetter = str.slice(0, 1);

  return result.concat(secondLetter, corps, firstLetter);
}

const switchArray = (arr) => {
  const resultArray = [];
  arr.forEach(element => {
    resultArray.push(reverse(element));
  });
console.log(resultArray);
  return resultArray;
}

switchArray(arr);