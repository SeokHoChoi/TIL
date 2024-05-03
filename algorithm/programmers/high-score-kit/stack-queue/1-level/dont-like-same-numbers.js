export function solution(arr) {
  const stack = new Stack(arr);

  return stack.stack;
}

export class Stack {
  #stack = [];

  constructor(arr) {
    this.checkSameNumbers(arr);
  }

  length = this.#stack.length;

  #popSameNumber() {
    this.#stack.pop();
  }

  push(item) {
    this.#stack.push(item);
  }

  size() {
    return this.#stack.length;
  }

  empty() {
    return this.size() === 0;
  }

  get stack() {
    return this.#stack;
  }

  checkSameNumbers(arr) {
    arr.forEach((arrNum) => {
      this.push(arrNum);
      const isNotEmpty = !this.empty();
      const previouslyAdded = this.#stack[this.size() - 2];
      const nowAdded = this.#stack[this.size() - 1];
      const isContinuousEquality = previouslyAdded === nowAdded;

      if (isNotEmpty && isContinuousEquality) {
        this.#popSameNumber();
      }
    });
  }
}
