// const ls = [50, 55, 56, 57, 58];
const ls = [ 91, 74, 73, 85, 73, 81, 87 ];

// function chooseBestSum(t, k, ls) {
//   // console.log(t, k, ls);
//   let finalArray = [];
//   ls.forEach(element => {
//     for (let n = ls.indexOf(element) + 1; n < ls.length; n++) {
//       let add = element;
      
//       if (ls[n] == undefined) return;

//       console.log('second', ls[n]);

//       add += ls[n];

//       for (let r = 1; r < k; r++) {
//         let final = add;
//         if (ls[n + r] == undefined) return;

//         console.log('THIRD', ls[n + r], n, r);
//         final += ls[n + r];

//         if (final <= t) {
//           finalArray.push(final);
//         }
//       }
//     }
//   });
//   console.log(finalArray);
//   if (finalArray.length == 0) return null;
//   return Math.max(...finalArray);
// }

// const ls = [ 91, 74, 73, 85, 73, 81, 87 ];
function chooseBestSum(t, k, ls) {
  var biggestCount = 0;
  var recurseTowns = function(townsSoFar, lastIndex) {
    console.log(townsSoFar, lastIndex);
    townsSoFar = townsSoFar || [];
    //base case
    if (townsSoFar.length === k) {
      var sumDistance = townsSoFar.reduce((a,b)=>a+b);
      if (sumDistance <= t && sumDistance > biggestCount) {
        biggestCount = sumDistance;
      }      
      return; //EJECT
    }
    //recursive case
    for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
      console.log('recursion', ls[i]);
      console.log('OldTownsSoFar', townsSoFar);
      recurseTowns(townsSoFar.concat(ls[i]), i);
    }
  }
  recurseTowns();
  
  return biggestCount || null;
}

console.log(chooseBestSum(400, 3, ls));
