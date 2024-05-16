import { solution } from './index';

describe('calculateMaxSuccessCount 함수', () => {
  it('주어진 피로도와 던전으로 최대 던전 탐험 횟수를 계산한다', () => {
    // 테스트 케이스 1: 주어진 예시
    const k1 = 80;
    const dungeons1 = [
      [80, 20],
      [50, 40],
      [30, 10],
    ];
    expect(solution(k1, dungeons1)).toBe(3);

    // 테스트 케이스 2: 모든 던전을 탐험할 수 없는 경우
    const k2 = 30;
    const dungeons2 = [
      [40, 20],
      [50, 30],
      [60, 40],
    ];
    expect(solution(k2, dungeons2)).toBe(0);

    // 테스트 케이스 3: 모든 던전을 탐험할 수 있는 경우
    const k3 = 100;
    const dungeons3 = [
      [50, 10],
      [70, 30],
      [30, 20],
      [90, 50],
    ];
    expect(solution(k3, dungeons3)).toBe(3);
  });
});
