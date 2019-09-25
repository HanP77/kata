// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=sorting

const array = [1, 12, 5, 111, 200, 1000, 10];
const money = 50;
// const array = [ 4, 3, 2, 1 ];
// const money = 7 ;

function maximumToys(prices, k) {
  let result = 0;
  let rest = k;
  let end = prices.length - 1;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < prices.length - 1; j++) {
      if (prices[j] < prices[j + 1]) {
        [prices[j], prices[j + 1]] = [prices[j + 1], prices[j]];
      }
    }

    if(rest >= prices[end]) {
      rest -= prices[end]
      end--
      result++;
    } else {
      break;
    }
  }

  return result;
}

console.log(maximumToys(array, money));