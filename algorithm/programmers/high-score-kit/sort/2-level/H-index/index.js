export function solution(citations) {
  citations.sort((a, b) => b - a);

  const hIndex = citations.findIndex((citation, index) => citation <= index);

  return hIndex === -1 ? citations.length : hIndex;
}
