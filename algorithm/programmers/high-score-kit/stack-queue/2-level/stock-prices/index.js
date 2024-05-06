// calculateDuration 함수: 특정 인덱스에서 가격이 떨어지지 않은 기간을 계산합니다.
export function calculateDuration(prices, currentIndex, stack, answer) {
  let duration = 0;
  while (
    stack.length !== 0 &&
    prices[stack[stack.length - 1]] > prices[currentIndex]
  ) {
    const topIndex = stack.pop();
    duration = currentIndex - topIndex;
    answer[topIndex] = duration;
  }
  stack.push(currentIndex);
}

// calculateFinalDurations 함수: stack에 남은 인덱스에 대해 가격이 떨어지지 않은 기간을 계산합니다.
export function calculateFinalDurations(prices, stack, answer) {
  const n = prices.length;
  while (stack.length !== 0) {
    const topIndex = stack.pop();
    answer[topIndex] = n - 1 - topIndex;
  }
}

// calculateDurations 함수: 주어진 주식 가격 배열에 대해 가격이 떨어지지 않은 기간을 계산합니다.
export function calculateDurations(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  for (let i = 0; i < prices.length; i++) {
    calculateDuration(prices, i, stack, answer);
  }
  calculateFinalDurations(prices, stack, answer);
  return answer;
}

// solution 함수: 가격이 떨어지지 않은 기간을 계산합니다.
export function solution(prices) {
  return calculateDurations(prices);
}
