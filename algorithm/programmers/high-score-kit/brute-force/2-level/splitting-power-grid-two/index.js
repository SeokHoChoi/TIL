export function transformArray(array) {
  const graph = {};

  // 각 숫자를 키로 하는 빈 배열을 생성합니다.
  array.forEach(([node1, node2]) => {
    if (!graph[node1]) {
      graph[node1] = [];
    }
    if (!graph[node2]) {
      graph[node2] = [];
    }
  });

  // 배열의 요소를 키와 값을 이용하여 그래프 형태로 구성합니다.
  array.forEach(([node1, node2]) => {
    graph[node1].push(node2);
    graph[node2].push(node1);
  });

  return graph;
}
