import { calculateDuration, calculateDurations, solution } from '.';

describe('calculateDuration 함수 테스트', () => {
  it('특정 인덱스에서 가격이 떨어지지 않은 기간을 올바르게 계산합니다.', () => {
    const prices = [1, 2, 3, 2, 3];

    // 특정 인덱스와 해당 인덱스에서의 기대되는 결과
    const testCases = [
      { index: 0, expected: 4 }, // prices[0] = 1, 1이 떨어지지 않은 기간은 4초입니다.
      { index: 1, expected: 3 }, // prices[1] = 2, 2가 떨어지지 않은 기간은 3초입니다.
      { index: 2, expected: 1 }, // prices[2] = 3, 3이 떨어지지 않은 기간은 1초입니다.
      { index: 3, expected: 1 }, // prices[3] = 2, 2가 떨어지지 않은 기간은 1초입니다.
      { index: 4, expected: 0 }, // prices[4] = 3, 3이 떨어지지 않은 기간은 0초입니다.
    ];

    // 각 테스트 케이스 실행 및 결과 검증
    testCases.forEach(({ index, expected }) => {
      const result = calculateDuration(prices, index);
      expect(result).toEqual(expected);
    });
  });
});

describe('calculateDurations 함수 테스트', () => {
  it('주어진 주식 가격 배열에 대해 가격이 떨어지지 않은 기간을 올바르게 계산합니다.', () => {
    const prices = [1, 2, 3, 2, 3];
    const expected = [4, 3, 1, 1, 0];

    const result = calculateDurations(prices);
    expect(result).toEqual(expected);
  });
});

describe('solution 함수 테스트', () => {
  it('주어진 주식 가격 배열에 대해 가격이 떨어지지 않은 기간을 올바르게 계산합니다.', () => {
    const prices = [1, 2, 3, 2, 3];
    const expected = [4, 3, 1, 1, 0];

    const result = solution(prices);
    expect(result).toEqual(expected);
  });
});
