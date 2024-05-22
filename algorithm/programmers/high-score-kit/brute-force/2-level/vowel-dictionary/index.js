// 모음을 정의합니다.
const VOWELS = ['A', 'E', 'I', 'O', 'U'];

// 각 자리에서 다음 단어로 넘어가기 위해 필요한 단어 수를 정의합니다.
const STEPS = [781, 156, 31, 6, 1];

// 주어진 단어에서 각 문자의 인덱스를 구합니다.
export function getVowelIndex(char) {
  return VOWELS.indexOf(char);
}

// 주어진 단어가 몇 번째 단어인지를 계산합니다.
export function calculateWordIndex(word) {
  let index = 0;
  for (let i = 0; i < word.length; i++) {
    const pos = getVowelIndex(word[i]);
    index += pos * STEPS[i] + 1; // 각 자리에서의 위치를 STEPS로 곱하고, 1을 더해 더합니다.
  }
  return index;
}

// 최종 solution 함수
export function solution(word) {
  return calculateWordIndex(word);
}
