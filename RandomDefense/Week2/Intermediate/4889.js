class Stack{
  constructor(){
    this.stack = [];
  }

  top(){
    return this.stack[this.stack.length - 1];
  }

  size(){
    return this.stack.length;
  }

  push(item){
    this.stack.push(item);
  }

  pop(){
    return this.stack.pop();
  }

  isEmpty(){
    return this.stack.length === 0;
  }
}

function solution(input){

  const str = input.split('');
  let stack = new Stack();
  let result = 0;
  for (let s of str) {
    // 닫는 괄호를 만났을 때, 스택이 비어 있거나 스택의 맨 위가 닫는 괄호인 경우
    if (s === '}' && (stack.isEmpty() || stack.top() === '}')) {
      result += 1; // 여는 괄호로 바꾸는 연산 1회 추가
      stack.push('{'); // 바뀐 여는 괄호를 스택에 푸시
    } else if (s === '}' && stack.top() === '{') {
      stack.pop(); // 올바른 쌍을 찾았으므로 pop
    } else {
      stack.push(s); // 그 외의 경우 스택에 푸시
    }
  } 

  result += stack.size() / 2;
  return result;
}

// const fs = require('fs');

// try {
//   const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//   input.forEach((line, index) => {
//     if (line === '-') {
//       return;
//     }
//     console.log(`${index+1}. ${solution(line)}`);
//   });
// } catch (err) {
//   console.error(err);
// }

console.log(solution('{{{{'));
