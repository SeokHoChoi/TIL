export function solution(participant, completion) {
  for (let i = 0; i < participant.length; i++) {
    const index = completion.indexOf(participant[i]);

    if (index === -1) {
      return participant[i];
    }

    completion[index] = true;
  }
}
