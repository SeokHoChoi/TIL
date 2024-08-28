import { solution } from '.';

describe('solution 함수 테스트', () => {
  it('기본 케이스 - 여러 종류의 옷이 있는 경우', () => {
    const clothes = [
      ['hat', 'headgear'],
      ['sunglasses', 'eyewear'],
      ['turban', 'headgear'],
    ];
    const expected = 5;
    expect(solution(clothes)).toBe(expected);
  });

  it('기본 케이스 - 또 다른 여러 종류의 옷이 있는 경우', () => {
    const clothes = [
      ['yellowhat', 'headgear'],
      ['bluesunglasses', 'eyewear'],
      ['green_turban', 'headgear'],
    ];
    const expected = 5;
    expect(solution(clothes)).toBe(expected);
  });

  it('경계 케이스 - 하나의 옷만 있는 경우', () => {
    const clothes = [['hat', 'headgear']];
    const expected = 1;
    expect(solution(clothes)).toBe(expected);
  });

  it('경계 케이스 - 옷이 없는 경우', () => {
    const clothes = [];
    const expected = 0;
    expect(solution(clothes)).toBe(expected);
  });

  it('동일한 타입의 옷이 여러 개 있는 경우', () => {
    const clothes = [
      ['a', 'type1'],
      ['b', 'type1'],
      ['c', 'type1'],
    ];
    const expected = 3;
    expect(solution(clothes)).toBe(expected);
  });

  it('시간 복잡도 테스트 - 많은 수의 옷이 있는 경우', () => {
    const clothes = Array.from({ length: 1000 }, (_, i) => [
      `item${i}`,
      `type${i}`,
    ]);
    const expected = Math.pow(2, 1000) - 1;
    expect(solution(clothes)).toBe(expected);
  });
});
