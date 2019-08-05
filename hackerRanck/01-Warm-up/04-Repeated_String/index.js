// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const s = 'aba'
const n = 10

function repeatedString(s, n) {
  const r = n - (s.length * d)
  const d = Math.floor(n / s.length)

  const countOccurenceOfA = (str) => str.split('')
  .filter(c => c == 'a')
  .length

  return d * countOccurenceOfA(s) + countOccurenceOfA(s.substr(0, r))
}


console.log(repeatedString(s, n));