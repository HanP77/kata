const { PerformanceObserver, performance } = require('perf_hooks');

const a = 'fcrxzwscanmligyxyvym';
const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';

function makeAnagram(a, b) {
  let frequency = {};

  a.split('').forEach(char => (frequency[char] = (frequency[char] || 0) + 1));
  b.split('').forEach(char => (frequency[char] = (frequency[char] || 0) - 1));

  return Object.values(frequency).reduce((acc, cur) => acc + Math.abs(cur), 0);
}


function makeAnagramTwo(a, b) {
  const map = new Map();
  
  for (let char of a) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of b) {
    map.set(char, (map.get(char) || 0) - 1);
  }
  
  return [...map.values()].reduce((acc, cur) => acc + Math.abs(cur), 0);
}

console.log(makeAnagram(a, b));
// console.log(makeAnagramTwo(a, b));
