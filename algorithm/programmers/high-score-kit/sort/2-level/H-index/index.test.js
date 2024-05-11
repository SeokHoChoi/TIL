import { solution } from './index';

describe('solution 함수 테스트', () => {
  it('논문의 인용 횟수를 기반으로 H-Index를 계산한다', () => {
    expect(solution([3, 0, 6, 1, 5])).toBe(3);
    expect(solution([0, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(1);
    expect(solution([10, 9, 4, 1, 0])).toBe(3);
    expect(solution([0, 0, 0, 0, 0])).toBe(0);
    expect(solution([6, 6, 6, 6, 6])).toBe(5);
    expect(solution([1, 1, 1, 1, 1])).toBe(1);
    expect(solution([4, 4, 4])).toBe(3);
    expect(solution([5, 5, 5, 5])).toBe(4);
    expect(solution([6, 6, 6, 6])).toBe(4);
    expect(solution([10, 8, 5, 4, 3])).toBe(4);
  });
});
