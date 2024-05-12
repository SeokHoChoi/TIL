export function countCorrectAnswers(answers, pattern) {
  return answers.reduce((count, answer, index) => {
    if (answer === pattern[index % pattern.length]) {
      count++;
    }
    return count;
  }, 0);
}

export function getHighestScorers(correctCounts) {
  const maxCount = Math.max(...correctCounts);
  if (maxCount === 0) return [];

  return correctCounts.reduce((highestScorers, count, index) => {
    if (count === maxCount) {
      highestScorers.push(index + 1); // 인덱스를 수포자 번호로 변환
    }
    return highestScorers;
  }, []);
}

export function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const correctCounts = patterns.map((pattern) =>
    countCorrectAnswers(answers, pattern)
  );

  return getHighestScorers(correctCounts);
}
