export function solution(participants, completers) {
  const completionCount = {};

  // 완주자 명단을 카운트
  completers.forEach((name) => {
    if (completionCount[name]) {
      completionCount[name]++;
    } else {
      completionCount[name] = 1;
    }
  });

  // 참가자 명단을 순회하며 완주하지 못한 사람 찾기
  for (const participant of participants) {
    if (completionCount[participant]) {
      completionCount[participant]--;
    } else {
      return participant;
    }
  }
}
