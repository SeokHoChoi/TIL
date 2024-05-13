import { solution } from './index';

describe('solution 함수', () => {
  it('소수가 3개 생성되는지 확인합니다', () => {
    const numbers = '17';
    const expected = 3; // 생성되는 소수: 7, 17, 71
    const result = solution(numbers);
    expect(result).toEqual(expected);
  });

  it('소수가 2개 생성되는지 확인합니다', () => {
    const numbers = '011';
    const expected = 2; // 생성되는 소수: 11, 101
    const result = solution(numbers);
    expect(result).toEqual(expected);
  });

  it('소수가 6개 생성되는지 확인합니다', () => {
    const numbers = '123';
    const expected = 5; // 생성되는 소수: 2, 3, 13, 23, 31, 1321
    const result = solution(numbers);
    expect(result).toEqual(expected);
  });

  it('소수가 0개 생성되는지 확인합니다', () => {
    const numbers = '0';
    const expected = 0; // 0은 소수가 아니므로 생성되는 소수가 없음
    const result = solution(numbers);
    expect(result).toEqual(expected);
  });

  it('소수가 0개 생성되는지 확인합니다', () => {
    const numbers = '';
    const expected = 0; // 주어진 숫자가 없으므로 소수가 생성되지 않음
    const result = solution(numbers);
    expect(result).toEqual(expected);
  });
});
