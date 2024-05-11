export function solution(citations) {
  citations.sort((a, b) => b - a);

  let h = 0;
  let current = 0;
  for (let i = 0; i < citations.length; i++) {
    current = citations[i];

    if (current > h) {
      h = i + 1;
    }
  }

  return h;
}
