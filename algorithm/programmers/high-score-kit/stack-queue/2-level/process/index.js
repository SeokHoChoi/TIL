export function solution(priorities, location) {
  let count = 1;

  while (priorities.length !== 0) {
    const max = Math.max(...priorities);
    const shifted = priorities.shift();
    const isOutgoingLargest = max === shifted;
    const isLocationProcess = location === 0;

    if (isOutgoingLargest && isLocationProcess) return count;

    if (!isOutgoingLargest) {
      priorities.push(shifted);
      location = isLocationProcess ? priorities.length : location;
    } else {
      count++;
    }

    location--;
  }

  return 0;
}
