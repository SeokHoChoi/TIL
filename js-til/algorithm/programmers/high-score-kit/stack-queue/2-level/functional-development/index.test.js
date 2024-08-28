import { makingDatesWork, makingDeployCounts, solution } from './index';

describe('makingDatesWork 함수', () => {
  it('진행 상황과 개발 속도를 기반으로 개발 완료까지 걸리는 일 수를 반환해야 합니다', () => {
    expect(makingDatesWork([93, 30, 55], [1, 30, 5])).toEqual([7, 3, 9]);
    expect(
      makingDatesWork([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])
    ).toEqual([5, 10, 1, 1, 20, 1]);
  });
});

describe('makingDeployCounts 함수', () => {
  it('일 수 배열을 받아 배포할 수 있는 기능 수를 반환해야 합니다', () => {
    expect(makingDeployCounts([7, 3, 9])).toEqual([2, 1]);
    expect(makingDeployCounts([5, 10, 1, 1, 20, 1])).toEqual([1, 3, 2]);
  });
});

describe('solution 함수', () => {
  it('진행 상황과 개발 속도를 기반으로 배포할 수 있는 기능 수를 반환해야 합니다', () => {
    expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
    expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([
      1, 3, 2,
    ]);
  });
});
