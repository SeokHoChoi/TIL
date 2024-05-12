import { solution } from './index';

describe('solution 함수', () => {
  it('정답 배열이 [1, 2, 3, 4, 5]인 경우, [1]을 반환해야 합니다.', () => {
    const answers = [1, 2, 3, 4, 5];
    const expected = [1];
    expect(solution(answers)).toEqual(expected);
  });

  it('정답 배열이 [1, 3, 2, 4, 2]인 경우, [1, 2, 3]을 반환해야 합니다.', () => {
    const answers = [1, 3, 2, 4, 2];
    const expected = [1, 2, 3];
    expect(solution(answers)).toEqual(expected);
  });

  it('정답 배열이 [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]인 경우, [3]을 반환해야 합니다.', () => {
    const answers = [
      3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,
    ];
    const expected = [3];
    expect(solution(answers)).toEqual(expected);
  });

  it('정답 배열이 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]인 경우, [1, 2, 3]을 반환해야 합니다.', () => {
    const answers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const expected = [1, 2, 3];
    expect(solution(answers)).toEqual(expected);
  });
});
