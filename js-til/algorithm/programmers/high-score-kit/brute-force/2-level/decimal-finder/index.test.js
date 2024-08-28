import { generateCombinations, isPrime, solution } from './index';

describe('generateCombinations', () => {
  it('숫자 조합이 올바르게 생성되는지 확인합니다', () => {
    expect(generateCombinations('17')).toBe(3); // 소수: [7, 17, 71]
    expect(generateCombinations('011')).toBe(2); // 소수: [11, 101]
  });

  it('소수가 생성되지 않는 경우 0을 반환합니다', () => {
    expect(generateCombinations('44')).toBe(0); // 소수: 없음
  });

  it('빈 입력에 대해 0을 반환합니다', () => {
    expect(generateCombinations('')).toBe(0);
  });
});

describe('isPrime', () => {
  it('소수인 경우 true를 반환합니다', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  it('소수가 아닌 경우 false를 반환합니다', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
  });
});

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
