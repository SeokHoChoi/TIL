function solution(k, dungeons) {
  let answer = 0;
  const length = dungeons.length;
  const visited = Array.from({ length }).fill(false);

  const dfs = (fatigue, count) => {
    for (let i = 0; i < length; i++) {
      const minFatigue = dungeons[i][0];
      const consumption = dungeons[i][1];
      if (!visited[i] && fatigue >= minFatigue) {
        visited[i] = true;
        dfs(fatigue - consumption, count + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, count);
  };
  dfs(k, 0);

  return answer;
}
