import { transformArray } from './index';

describe('transformArray 함수', () => {
  it('2차원 배열을 지정된 형태로 변환한다', () => {
    const input = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const expectedOutput = {
      1: [2],
      2: [1, 3],
      3: [2, 4],
      4: [3],
    };
    expect(transformArray(input)).toEqual(expectedOutput);
  });

  it('빈 배열을 올바르게 처리한다', () => {
    const input = [];
    const expectedOutput = {};
    expect(transformArray(input)).toEqual(expectedOutput);
  });

  it('중복 노드가 있는 2차원 배열을 올바르게 변환한다', () => {
    const input = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ];
    const expectedOutput = {
      1: [2, 3],
      2: [1, 3],
      3: [2, 4, 1],
      4: [3],
    };
    expect(transformArray(input)).toEqual(expectedOutput);
  });
});
