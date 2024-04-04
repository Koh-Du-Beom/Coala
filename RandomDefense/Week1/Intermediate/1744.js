// function solution(numbers){
// 	numbers.sort((a, b) => b - a); //내림차순 정렬
// 	let result = 0;
// 	for(let i = 0; i<numbers.length; i+=2){
// 		if (numbers.length === 1){
// 			return numbers[0];
// 		}

// 		if (i===numbers.length - 1){
// 			result += numbers[i];
// 			return result;
// 		}

// 		if (i+2 === numbers.length - 1){
// 			if (numbers[i+1] <= 0 && numbers[i+2] <=0){
// 				result += numbers[i+1] * numbers[i+2] + numbers[i];
// 				if(result >= 2**31){ result = 2**31 -1 }
// 				return result;
// 			}
// 		}// 마지막 3개가 1보다 큰 양수, 0, 음인 경우는 다르게 처리해야됨.

// 		if(numbers[i] > 1 && numbers[i+1] > 1){
// 			result += numbers[i] * numbers[i+1];
// 		}else if (numbers[i] > 1 || numbers[i+1] === 1){
// 			result += numbers[i] + numbers[i+1];
// 		}else if (numbers[i] > 0 && numbers[i+1] === 0){
// 			result += numbers[i] + numbers[i+1];
// 		}else if (numbers[i+1] < 0 && numbers[i] > 0){
// 			result += numbers[i] + numbers[i+1]
// 		}else if (numbers[i+1] < 0 && numbers[i] <= 0){
// 			result += numbers[i] * numbers[i+1];
// 		}
// 	}
// 	return result;
// }





function solution(numbers){
	const positives = numbers.filter(item => item > 1).sort((a, b) => b - a);
	const negatives = numbers.filter(item => item < 0).sort((a, b) => a - b);
	const zeros = numbers.filter(item => item === 0);
	const ones = numbers.filter(item => item === 1);

	let result = ones.reduce((acc, cur) => acc + cur, 0); // 1은 전부다 더하기

	// 양수 처리
	for (let i = 0; i < positives.length; i += 2){
		if (i + 1 < positives.length) {
			result += positives[i] * positives[i + 1];
		} else {
			result += positives[i]; // 홀수 번째 양수를 처리
		}
	}

	// 음수 처리
	for (let i = 0; i < negatives.length; i += 2){
		if (i + 1 < negatives.length) {
			result += negatives[i] * negatives[i + 1];
		} else if (zeros.length === 0) { // 홀수 번째 음수를 처리하고 0이 없을 때
			result += negatives[i];
		}
	}

	return result;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

console.log(solution(input));

