
function solution(n){
	let dp = Array.from({length : n + 1}, () => new Array(10).fill(0));
	const mod = 1000000000;
	// dp[i][j]에서 i는 자릿수, j는 끝의 숫자. 예를 들어 dp[3][1] 세 자리 숫자이면서 끝이 1인 수
	dp[1][0] = 0;
	for (let i = 1; i<10; i++){
		dp[1][i] = 1;
	}

	for (let i=2; i<=n; i++){
		for(let j=0; j<=9; j++){
			if (j === 0){ dp[i][j] = dp[i-1][1] }
			else if (j === 9){ dp[i][j] = dp[i-1][8] }
			else{
				dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1];
			}
			
			dp[i][j] %= mod;
		}
	}

	return dp[n].reduce((acc, cur) => acc + cur, 0) % mod;
	
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));