function solution(n){
	let tmp = 1;
	for(let i=2; i<=n; i++){
		tmp *= i;
	}

	let number = tmp.toString();
	for (let i=number.length-1; i>=0; i--){
		if (number[i] !== '0'){
			return number[i];
		}
	}

}

// const fs = require('fs');
// const n = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(solution(7));