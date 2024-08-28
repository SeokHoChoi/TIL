/**
 * @description
 * - 자연수를 저장하는 큐입니다.
 */
export class Queue {
  #array;

  constructor(array = []) {
    this.#array = array;
  }

  /**
   * @description
   * - 자연수를 큐 뒤쪽에 넣습니다.
   */
  enqueue(element) {
    this.#array.push(element);
    return element;
  }

  /**
   * @description
   * - 큐 앞쪽의 값을 제거 후 그 값을 반환합니다.
   * - 값이 없다면 -1을 반환합니다.
   */
  dequeue() {
    const shifted = this.#array.shift();
    return shifted === undefined ? -1 : shifted;
  }

  /**
   * @description
   * 큐가 비어 있다면 1, 아니면 0을 반환합니다.
   */
  size() {
    return this.#array.length;
  }

  /**
   * @description
   * 큐에 들어 있는 자연수 개수를 반환합니다.
   */
  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  /**
   * @description
   * 큐 앞쪽에 값이 있다면 해당 값을, 없다면 -1을 반환합니다.
   */
  front() {
    return this.#array.length === 0 ? -1 : this.#array[0];
  }

  /**
   * @description
   * 큐 뒤쪽에 값이 있다면 해당 값을, 없다면 -1을 반환합니다.
   */
  back() {
    const len = this.#array.length;
    return len === 0 ? -1 : this.#array[len - 1];
  }
}
