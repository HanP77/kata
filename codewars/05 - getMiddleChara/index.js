// https://www.codewars.com/kata/56747fd5cb988479af000028

let str = 'doog';
function getMiddle(s) {
  let half = Math.floor(s.length / 2) ;
  return s.length % 2 ? s.slice(half, half + 1) : s.slice(half - 1 , half + 1);
};

console.log(getMiddle(str));

// "best solution"
function getMiddleBest(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// Other

function getMiddleOther(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}