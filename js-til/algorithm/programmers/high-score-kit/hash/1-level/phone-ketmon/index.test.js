import { solution } from './index';

test('예제 1: [3, 1, 2, 3] -> 2', () => {
  const nums = [3, 1, 2, 3];
  const result = solution(nums);
  expect(result).toBe(2);
});

test('예제 2: [3, 3, 3, 2, 2, 4] -> 3', () => {
  const nums = [3, 3, 3, 2, 2, 4];
  const result = solution(nums);
  expect(result).toBe(3);
});

test('예제 3: [3, 3, 3, 2, 2, 2] -> 2', () => {
  const nums = [3, 3, 3, 2, 2, 2];
  const result = solution(nums);
  expect(result).toBe(2);
});

test('중복 없는 배열: [1, 2, 3, 4, 5, 6] -> 3', () => {
  const nums = [1, 2, 3, 4, 5, 6];
  const result = solution(nums);
  expect(result).toBe(3);
});

test('모든 요소가 같은 경우: [7, 7, 7, 7] -> 1', () => {
  const nums = [7, 7, 7, 7];
  const result = solution(nums);
  expect(result).toBe(1);
});

test('빈 배열: [] -> 0', () => {
  const nums = [];
  const result = solution(nums);
  expect(result).toBe(0);
});
