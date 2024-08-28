export function findConnected(wires) {
  const connectedTowers = {};

  // 각 숫자를 키로 하는 빈 배열을 생성합니다.
  wires.forEach(([node1, node2]) => {
    if (!connectedTowers[node1]) {
      connectedTowers[node1] = [];
    }
    if (!connectedTowers[node2]) {
      connectedTowers[node2] = [];
    }
  });

  // 배열의 요소를 키와 값을 이용하여 그래프 형태로 구성합니다.
  wires.forEach(([node1, node2]) => {
    connectedTowers[node1].push(node2);
    connectedTowers[node2].push(node1);
  });

  return connectedTowers;
}

export function countTowers(node, visited, graph) {
  let count = 1; // 현재 노드 카운트

  if (visited.length > 0) {
    visited[node] = true; // 방문 표시
  }

  if (Object.keys(graph).length === 0) {
    return 0;
  }

  for (const neighbor of graph[node]) {
    if (visited.length > 0 && !visited[neighbor]) {
      count += countTowers(neighbor, visited, graph);
    }
  }

  return count;
}

export function solution(n, wires) {
  const graph = findConnected(wires);
  let minDifference = Infinity;

  // 모든 전선을 하나씩 끊어보면서 두 전력망의 송전탑 개수를 비교
  for (const [node1, node2] of wires) {
    // 임시로 전선을 끊는다
    graph[node1] = graph[node1].filter((n) => n !== node2);
    graph[node2] = graph[node2].filter((n) => n !== node1);

    // 두 전력망으로 나누었을 때 송전탑 개수 계산
    const visited = Array(n + 1).fill(false);
    const count1 = countTowers(1, visited, graph);
    const count2 = n - count1;
    const difference = Math.abs(count1 - count2);

    // 차이의 최소값을 업데이트
    minDifference = Math.min(minDifference, difference);

    // 전선을 다시 연결한다
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  return minDifference;
}
