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
    if (s === '}' && (stack.isEmpty() || stack.top() === '}')) {
      result += 1; 
      stack.push('{'); 
    } else if (s === '}' && stack.top() === '{') {
      stack.pop();
    } else {
      stack.push(s); 
    }
  } 

  result += stack.size() / 2;
  return result;
}

const fs = require('fs');

try {
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  input.forEach((line, index) => {
    if (line === '-') {
      return;
    }
    console.log(`${index+1}`+ '. '+ `${solution(line)}`);
  });
} catch (err) {
  console.error(err);
}


