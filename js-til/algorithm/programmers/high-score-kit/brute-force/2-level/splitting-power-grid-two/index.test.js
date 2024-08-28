import { countTowers, findConnected } from './index';

describe('송전탑에 연결된 전선들을 찾는 findConnected 함수', () => {
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
    expect(findConnected(input)).toEqual(expectedOutput);
  });

  it('빈 배열을 올바르게 처리한다', () => {
    const input = [];
    const expectedOutput = {};
    expect(findConnected(input)).toEqual(expectedOutput);
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
    expect(findConnected(input)).toEqual(expectedOutput);
  });
});

describe('countTowers', () => {
  it('주어진 노드와 방문 배열로 연결된 노드의 수를 계산합니다', () => {
    const graph = {
      1: [2, 3],
      2: [1, 4],
      3: [1],
      4: [2],
    };
    const visited = Array(5).fill(false);
    const result = countTowers(1, visited, graph);
    expect(result).toBe(4);
  });

  it('비어 있는 그래프에서는 0을 반환합니다', () => {
    const graph = {};
    const visited = Array(1).fill(false);
    const result = countTowers(1, visited, graph);
    expect(result).toBe(0);
  });

  it('방문 배열이 초기화되지 않은 경우 오류를 방지합니다', () => {
    const graph = {
      1: [2],
      2: [1],
    };
    const visited = [];
    const result = countTowers(1, visited, graph);
    expect(result).toBe(1);
  });
});
