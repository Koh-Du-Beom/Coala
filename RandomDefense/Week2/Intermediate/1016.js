
function solution(min, max){
	const notSquare = Array(max - min + 1).fill(false); // 제곱 ㄴㄴ수 여부 저장
	let count = 0;

	const max_index = Math.floor(Math.sqrt(max));
	for (let i = 2; i<=max_index; i++){
		const square = i ** 2;
		let start_index = Math.ceil(min / square) * square;
		for (let j = start_index; j<=max; j+= square){
			notSquare[j - min] = true;
		}
	}


	notSquare.forEach(value => {
		if (!value) count++;
	})

	return count;

}


// const fs = require('fs');
// const [min,max] = fs.readFileSync("./dev/stdin").toString().trim().split(' ').map(Number)
console.log(solution(1, 10));