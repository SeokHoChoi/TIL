export function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const steps = [781, 156, 31, 6, 1]; // 각 자리에서 다음 단어로 넘어가기 위해 필요한 단어 수

  let index = 0;
  for (let i = 0; i < word.length; i++) {
    const pos = vowels.indexOf(word[i]);
    index += pos * steps[i] + 1; // 각 자리에서의 위치를 steps로 곱하고, 1을 더해 더합니다.
  }

  return index;
}
