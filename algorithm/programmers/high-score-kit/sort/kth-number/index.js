export function sortedNeeds(array, start, end) {
  return array.slice(start - 1, end).sort((a, b) => a - b);
}

export function findKthNumber(sortedArray, k) {
  return sortedArray[k - 1];
}

export function solution(array, commands) {
  const answer = [];

  for (const command of commands) {
    const [start, end, pick] = command;
    const sortedArray = sortedNeeds(array, start, end);
    const kthNumber = findKthNumber(sortedArray, pick);

    answer.push(kthNumber);
  }

  return answer;
}
