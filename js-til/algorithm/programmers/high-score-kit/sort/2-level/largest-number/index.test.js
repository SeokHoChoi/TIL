import { compare, solution } from './index';

describe('solution 함수 테스트', () => {
  it('주어진 숫자 배열을 조합하여 가장 큰 수를 반환한다', () => {
    expect(solution([6, 10, 2])).toBe('6210');
    expect(solution([3, 30, 34, 5, 9])).toBe('9534330');
  });

  it('모든 숫자가 0일 때는 0을 반환한다', () => {
    expect(solution([0, 0, 0])).toBe('0');
  });

  it('결과가 0으로 시작하지 않는다', () => {
    expect(solution([0, 5, 2, 7])).not.toBe('0');
    expect(solution([0, 0, 1, 0])).not.toBe('0');
  });
});

describe('compare 함수 테스트', () => {
  it('숫자를 문자열로 변환한 뒤 비교한다', () => {
    expect(compare(9, 10)).toBeLessThan(0); // '910' < '109' 이므로 음수여야 합니다.
    expect(compare(30, 3)).toBeGreaterThan(0); // '303' > '330' 이므로 양수여야 합니다.
  });
});
