export function solution(participant, completion) {
  const numOfCompleted = {};

  completion.forEach((item, index) => {
    if (numOfCompleted[item]) {
      numOfCompleted[item] = numOfCompleted[item] + 1;
    } else {
      numOfCompleted[item] = 1;
    }
  });

  for (let i = 0; i < participant.length; i++) {
    const item = participant[i];
    if (numOfCompleted[item] !== 0 && numOfCompleted[item] !== undefined) {
      numOfCompleted[item] = numOfCompleted[item] - 1;

      if (numOfCompleted[item] < 0) {
        return item;
      }
    } else {
      return item;
    }
  }
}
