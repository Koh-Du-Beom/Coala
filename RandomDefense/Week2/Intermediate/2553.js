function solution(n){
	let tmp = 1;
	for(let i=1; i<=n; i++){
		tmp *= i;
	}

	let number = tmp.toString();
	for (let i=number.length-1; i>=0; i--){
		if (number[i] !== '0'){
			return number[i];
		}
	}

}

const fs = require('fs');
const n = parseInt(fs.readFileSync("/dev/stdin").toString().trim(), 10);
console.log(solution(n));