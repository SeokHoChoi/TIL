import {
  calculateDuration,
  calculateFinalDurations,
  calculateDurations,
  solution,
} from './index';

describe('calculateDuration 함수', () => {
  it('주어진 가격 배열에서 각 시점마다 가격이 떨어지지 않은 기간을 계산하고, 원본 배열을 변경한다.', () => {
    // Given
    const prices = [1, 2, 3, 2, 3];
    const stack = [0, 1, 2];
    const answer = new Array(prices.length).fill(0);

    // When
    calculateDuration(prices, 3, stack, answer);

    // Then
    expect(answer).toEqual([0, 0, 1, 0, 0]); // 원본 배열이 기대한 대로 변경되었는지 확인
  });
});

describe('calculateFinalDurations 함수', () => {
  it('가격이 떨어지지 않은 기간을 마무리 짓고, 원본 배열을 변경한다.', () => {
    // Given
    const prices = [1, 2, 3, 2, 3];
    const stack = [0, 1, 3, 4];
    const answer = [0, 0, 1, 0, 0];

    // When
    calculateFinalDurations(prices, stack, answer);

    // Then
    expect(answer).toEqual([4, 3, 1, 1, 0]); // 원본 배열이 기대한 대로 변경되었는지 확인
  });
});

describe('calculateDurations 함수', () => {
  it('각 시점마다 가격이 떨어지지 않은 기간을 계산하고 마무리 짓고, 원본 배열을 변경한다.', () => {
    // Given
    const prices = [1, 2, 3, 2, 3];

    // When
    const result = calculateDurations(prices);

    // Then
    expect(result).toEqual([4, 3, 1, 1, 0]); // 반환 값이 기대한 대로 나왔는지 확인
  });
});
