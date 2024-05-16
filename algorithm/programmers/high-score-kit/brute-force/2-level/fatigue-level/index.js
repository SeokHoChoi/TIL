export function solution(k, dungeons) {
  const dfs = (fatigue, count, visited) => {
    // 더 이상 방문할 수 있는 던전이 없을 때까지 탐색합니다.
    if (visited.every((isVisited) => isVisited)) {
      return count;
    }

    let maxCount = count;

    dungeons.forEach(([minFatigue, consumption], index) => {
      const canVisit = !visited[index] && fatigue >= minFatigue;

      if (canVisit) {
        visited[index] = true;
        const result = dfs(fatigue - consumption, count + 1, visited);
        maxCount = Math.max(maxCount, result);
        visited[index] = false;
      }
    });

    return maxCount;
  };

  // 던전 방문 여부를 나타내는 배열을 초기화합니다.
  const visited = Array(dungeons.length).fill(false);

  // DFS 알고리즘을 사용하여 최대 피로도를 계산하고 반환합니다.
  return dfs(k, 0, visited);
}
