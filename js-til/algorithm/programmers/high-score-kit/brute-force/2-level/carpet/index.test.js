import { solution } from './index';

describe('solution 함수', () => {
  it('주어진 예시에 대해 올바른 격자수를 반환해야 합니다', () => {
    expect(solution(10, 2)).toEqual([4, 3]);
    expect(solution(8, 1)).toEqual([3, 3]);
    expect(solution(24, 24)).toEqual([8, 6]);
  });

  it('가로와 세로 길이는 모두 자연수여야 합니다', () => {
    const [width, height] = solution(24, 24);
    expect(width).toBeGreaterThan(0);
    expect(height).toBeGreaterThan(0);
  });

  it('brown과 yellow의 값을 모두 포함하는 결과여야 합니다', () => {
    const [width, height] = solution(24, 24);
    const brownCount = width * 2 + height * 2 - 4; // 테두리 격자를 제외한 brown 격자 수
    const yellowCount = (width - 2) * (height - 2); // 테두리 격자를 제외한 yellow 격자 수
    expect(brownCount).toEqual(24);
    expect(yellowCount).toEqual(24);
  });
});
