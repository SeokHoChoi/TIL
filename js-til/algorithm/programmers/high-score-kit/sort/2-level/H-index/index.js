export function sortDesc(citations) {
  return citations.sort((a, b) => b - a);
}

export function findHIndex(citations) {
  return citations.findIndex((citation, index) => citation <= index);
}

export function solution(citations) {
  const sortedCitations = sortDesc(citations);
  const hIndex = findHIndex(sortedCitations);

  return hIndex === -1 ? sortedCitations.length : hIndex;
}
