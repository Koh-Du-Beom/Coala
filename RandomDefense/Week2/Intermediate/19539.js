
//주요 로직 : 결국 1을 줄 수 있는 횟수와 2를 줄 수 있는 횟수가 같아야한다. 
// 2의 개수와 1의 개수
// 결국 근데 2가 더 많을 수 있음 근데 2를 1로 2개를 쪼갤 수가 있음. 
// 예를들어 10000 1000 100의 경우 2의 개수가 5000, 500, 50임. 2를 조금 빼준다고 생각하면
// 2의 현재 개수가 5500개고, 1이 0개. 2에서 x만큼 떼주면, 1은 2x만큼 증가 
//그래서 식이 5500 - x = 2x x가 자연수로 딱 떨어짐. 이 x가 물을 줄 수 있는 횟수고.

function solution(numbers){
	let count1 = 0;
	let count2 = 0;

	for(num of numbers){
		count2 += Math.floor(num / 2);
		count1 += num % 2;
	}

	let x = (count2 - count1) / 3;
	console.log(x);
 	return x >= 0 && Number.isInteger(x) ? "YES" : "NO";
}	

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);


console.log(solution([6, 3]));