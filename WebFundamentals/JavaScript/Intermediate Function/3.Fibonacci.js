// function fibonacci(num) {
//     var final=[];
//     var fib=0;
//     for(var i=num;i>=0;i--)//4: 3 2 1 0
//     {
//         final.push(i);
//     }
//     fib+=final[num-1-1]+[num-1-2]

//     return fibonacci(num - 1) + fibonacci(num - 2);
// }
// console.log(fibonacci(6));
// //Maximum call stack size exceeded"?!!!!
function fibonacci(nums) {
  let indexesArr = [];
  let fibArr = [0, 1];


  for (var i = 2; i <= nums; i++) {//2, 1 and 0 values are given
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    indexesArr.push(fibArr[i]);
  }

  return indexesArr[indexesArr.length - 1];
}

console.log(fibonacci(6));
  //0 1 2 3 4 5 6 7  8
  //0 1 1 2 3 5 8 13 21
/*
f(0)=0 -->a given
f(1)=1 -->a given
*/