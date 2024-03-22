class PriorityQueue{
	constructor(){
		this.heap = [];
	}

	size(){
		return this.heap.length;
	}

	swap(idx1, idx2){
		[this.heap[idx2], this.heap[idx1]] = [this.heap[idx1], this.heap[idx2]];	
	}

	getParent(index){
		return Math.floor(index - 1) / 2;
	}

	getLeftChild(index){
		return index * 2;
	}

	getRightChild(index){
		return index * 2 + 1;
	}

	peek(){
		return this.heap[1];
	}

	push(value){
		this.heap.push(value);
		let currentIndex = this.size() - 1;
		while(currentIndex > 1 && this.heap[currentIndex] > this.heap[this.getParent(currentIndex)]){
			this.swap(currentIndex, this.getParent(currentIndex));
			currentIndex = this.getParent(currentIndex);
		}
		
	}

	pop(){
		if (this.size() < 2) return null; // 힙이 비었거나 하나의 원소만 있을 때

    const returnValue = this.heap[1]; // 반환할 최대값
    this.heap[1] = this.heap.pop(); // 마지막 요소를 루트로 이동

    let currentIndex = 1;
    while (this.getLeftChild(currentIndex) < this.size()) {
			let biggerChildIndex = this.getLeftChild(currentIndex);
			if (this.getRightChild(currentIndex) < this.size() && this.heap[this.getRightChild(currentIndex)] > this.heap[biggerChildIndex]) {
				biggerChildIndex = this.getRightChild(currentIndex);
			}

			if (this.heap[currentIndex] < this.heap[biggerChildIndex]) {
				this.swap(currentIndex, biggerChildIndex);
				currentIndex = biggerChildIndex;
			} else {
				break;
			}
    }

    return returnValue;
	}

}