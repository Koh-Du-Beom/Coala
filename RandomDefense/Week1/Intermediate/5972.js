class PriorityQueue {
  constructor() {
    this.heap = [{ cost: 0, barn: 0 }]; // 최소 힙, 비용과 헛간 번호를 객체로 관리
  }

  isEmpty() {
    return this.heap.length === 1; // heap[0]은 사용하지 않음
  }

  push({ cost, barn }) {
    this.heap.push({ cost, barn });
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > cost) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return undefined;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftChildIndex = currentIndex * 2;
    let rightChildIndex = currentIndex * 2 + 1;

    while (leftChildIndex < this.heap.length) {
      let smallerChildIndex = leftChildIndex;
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].cost < this.heap[leftChildIndex].cost) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex].cost <= this.heap[smallerChildIndex].cost) break;

      [this.heap[currentIndex], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[currentIndex]];
      currentIndex = smallerChildIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}