import { countCorrectAnswers, getHighestScorers, solution } from './index';

describe('countCorrectAnswers 함수', () => {
  it('정답 배열과 패턴이 주어졌을 때, 정확히 맞은 개수를 반환해야 합니다.', () => {
    const answers = [1, 2, 3, 4, 5];
    const pattern = [1, 2, 3, 4, 5];
    const correctCount = countCorrectAnswers(answers, pattern);
    expect(correctCount).toBe(5);
  });

  it('정답 배열과 패턴이 주어졌을 때, 정확히 맞은 개수를 반환해야 합니다.', () => {
    const answers = [1, 3, 2, 4, 2];
    const pattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const correctCount = countCorrectAnswers(answers, pattern);
    expect(correctCount).toBe(2);
  });

  it('정답 배열과 패턴이 주어졌을 때, 정확히 맞은 개수를 반환해야 합니다.', () => {
    const answers = [
      3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,
    ];
    const pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const correctCount = countCorrectAnswers(answers, pattern);
    expect(correctCount).toBe(20);
  });
});

describe('getHighestScorers 함수', () => {
  it('각 수포자의 정답 개수 배열이 주어졌을 때, 가장 많이 맞은 사람의 번호를 배열로 반환해야 합니다.', () => {
    const correctCounts = [3, 5, 3];
    const highestScorers = getHighestScorers(correctCounts);
    expect(highestScorers).toEqual([2]);
  });

  it('각 수포자의 정답 개수 배열이 주어졌을 때, 가장 많이 맞은 사람의 번호를 배열로 반환해야 합니다.', () => {
    const correctCounts = [4, 4, 4];
    const highestScorers = getHighestScorers(correctCounts);
    expect(highestScorers).toEqual([1, 2, 3]);
  });

  it('각 수포자의 정답 개수 배열이 주어졌을 때, 가장 많이 맞은 사람의 번호를 배열로 반환해야 합니다.', () => {
    const correctCounts = [2, 0, 3];
    const highestScorers = getHighestScorers(correctCounts);
    expect(highestScorers).toEqual([3]);
  });

  it('각 수포자의 정답 개수 배열이 주어졌을 때, 모든 수포자가 문제를 하나도 맞추지 못한 경우 빈 배열을 반환해야 합니다.', () => {
    const correctCounts = [0, 0, 0];
    const highestScorers = getHighestScorers(correctCounts);
    expect(highestScorers).toEqual([]);
  });
});

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
