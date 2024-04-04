function factorial(num){
  let dp = Array.from({ length : num }, () => 0);
  dp[0] = 1;
  
  for (let i=1; i<=num; i++){
    dp[i] = dp[i-1] * i; 
    dp[i] %= 10007;
  }
  return dp[num];
}

function solution(N, K){
  let result =  Math.floor(factorial(N) / (factorial(N - K) * factorial(K)));
  return result % 10007;
}

console.log(solution(5, 2));

// const fs = require('fs');
// const [N, K] = fs.readFileSync("./dev/stdin").toString().trim().split(' ').map(Number)

// console.log(solution(N, K));