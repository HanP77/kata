// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
    let result = 0;
    ar.sort();
    // use sort then can compare one int directly to the next
    for (let i = 0; i < n ; i++) {
    // Our array would be [10, 10, 10, 10, 20, 20, 20, 30, 50]  
      if(ar[i] == ar[i+1]) {

        i++; //If pair is validated then the loop jump to the next one 
        result++;
      }
    }
    return result
}


console.log(sockMerchant(n, ar));