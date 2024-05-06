export function calculateDuration(prices, currentIndex) {
  let duration = 0;
  for (let j = currentIndex + 1; j < prices.length; j++) {
    if (prices[currentIndex] <= prices[j]) {
      duration++;
    } else {
      duration++;
      break;
    }
  }
  return duration;
}

export function calculateDurations(prices) {
  const durations = [];
  for (let i = 0; i < prices.length; i++) {
    durations.push(calculateDuration(prices, i));
  }
  return durations;
}

export function solution(prices) {
  return calculateDurations(prices);
}
