
function solution(n, arr) {
  let dp = new Array(n).fill(1);
	for (let i=0; i<n; i++){
		for (let j=0; j<=i; j++){
			if(arr[i] > arr[j]){
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}
	return Math.max(...dp);
}

console.log(solution(5, [8,9,1,2,10]));