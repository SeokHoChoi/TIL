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
