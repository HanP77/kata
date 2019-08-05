const inputs = ['-12', '-5', '-137', '0'];

function solution(inputs) {
  // let result = inputs.reduce((acc, current) => {
  //   console.log('acc', acc);
  //   console.log('current', current);
  //   current * current - current < acc * acc ? current : acc;
  // });
  let result = inputs.reduce((acc, current) => {
    console.log('acc', acc);
    console.log('current', current);
    console.log('test', current * current - current < acc * acc);
    console.log('result', current * current - current < acc * acc ? current : acc);
    return current * current - current < acc * acc ? current : acc;
  });
  return result;
}

console.log(solution(inputs));
