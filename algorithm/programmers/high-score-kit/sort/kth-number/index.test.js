import { findKthNumber, sliceAndSort, solution } from './index';

describe('sliceAndSort 함수', () => {
  it('배열을 주어진 범위로 자르고 정렬한다', () => {
    // 입력
    const array = [1, 5, 2, 6, 3, 7, 4];
    const start = 2;
    const end = 5;

    // 실행
    const result = sliceAndSort(array, start, end);

    // 검증
    expect(result).toEqual([2, 3, 5, 6]);
  });
});

describe('findKthNumber 함수', () => {
  it('정렬된 배열에서 k번째 숫자를 찾는다', () => {
    // 입력
    const sortedArray = [2, 3, 5, 6];
    const k = 3;

    // 실행
    const result = findKthNumber(sortedArray, k);

    // 검증
    expect(result).toEqual(5);
  });
});

describe('solution 함수', () => {
  it('주어진 배열과 명령어에 따라 정확한 결과를 반환한다', () => {
    // 입력
    const array = [1, 5, 2, 6, 3, 7, 4];
    const commands = [
      [2, 5, 3], // [2, 5, 3] -> [5, 2, 6, 3] -> [2, 3, 5, 6] -> 5
      [4, 4, 1], // [4, 4, 1] -> [6] -> 6
      [1, 7, 3], // [1, 7, 3] -> [1, 5, 2, 6, 3, 7, 4] -> [1, 2, 3, 4, 5, 6, 7] -> 3
    ];

    // 실행
    const result = solution(array, commands);

    // 검증
    expect(result).toEqual([5, 6, 3]);
  });
});
