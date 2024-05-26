export function solution(participants, completers) {
  const completionCount = {};
  // 완주자 명단을 카운트
  completers.forEach((name) => {
    const passedCount = completionCount[name];
    const isAnyonePassed = !!passedCount;
    const finalists = isAnyonePassed ? passedCount + 1 : 1;

    completionCount[name] = finalists;
  });

  // 참가자 명단을 순회하며 완주하지 못한 사람 찾기
  for (const participant of participants) {
    const passdCount = completionCount[participant];
    const isAnyonePassed = !!passdCount;

    if (!isAnyonePassed) {
      return participant;
    }

    completionCount[participant]--;
  }
}
