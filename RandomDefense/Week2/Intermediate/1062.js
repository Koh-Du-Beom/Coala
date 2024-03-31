function solution(sentences, ableToLearn) {
	ableToLearn -= 5;
	if (ableToLearn < 0) return 0;

	const excludeChars = ['a', 'n', 't', 'i', 'c'];
	const allChars = new Set(sentences.join('').split('').filter(char => !excludeChars.includes(char)));

	const filteredSentences = sentences.map(sentence =>
			sentence.slice(4, -4).split('').filter(char => !excludeChars.includes(char)).join('')
	);

	let maxCount = 0;

	// DFS를 사용하여 문자 조합 탐색
	function dfs(chars, index, learned) {
		if (learned.length === ableToLearn) {
			const count = filteredSentences.filter(sentence => 
				sentence.split('').every(char => learned.includes(char))
			).length;
			maxCount = Math.max(maxCount, count);
			return;
		}

		for (let i = index; i < chars.length; i++) {
			dfs(chars, i + 1, learned.concat(chars[i]));
		}
	}

	dfs([...allChars], 0, []);

	return maxCount;
}

// const sentences = ['antabtica', 'antaxtica', 'antadtica', 'antaetica', 'antaftica', 'antagtica', 'antahtica', 'antajtica', 'antaktica'];
const sentences = ['antarctica', 'antahellotica', 'antacartica'];
const ableToLearn = 6; 
console.log(solution(sentences, ableToLearn));
