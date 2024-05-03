import { solution } from './index';

describe('프로그래머스 process 문제 solution', () => {
  it('주어진 우선순위 배열과 위치에 따른 인쇄 순서를 올바르게 반환합니다.', () => {
    expect(solution([2, 1, 3, 2], 2)).toEqual(1);
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toEqual(5);
    expect(solution([1, 2, 3, 4], 2)).toEqual(2);
    expect(solution([3, 3, 4, 2, 3, 4, 5], 3)).toEqual(7);
    expect(solution([1, 1, 1, 1, 1], 2)).toEqual(3);
  });

  it('우선순위 배열이 비어 있을 때 0을 반환합니다.', () => {
    expect(solution([], 0)).toEqual(0);
    expect(solution([], 3)).toEqual(0);
  });

  it('위치가 배열의 시작 또는 끝에 있을 때 정확한 순서가 반환됩니다.', () => {
    expect(solution([1, 2, 3, 4], 0)).toEqual(4);
    expect(solution([1, 2, 3, 4], 3)).toEqual(1);
  });
});
