export function solution(answers) {
  const correctCounts = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ];

  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((answer, index) => {
    if (answer === pattern1[index % pattern1.length]) {
      correctCounts[0].count++;
    }

    if (answer === pattern2[index % pattern2.length]) {
      correctCounts[1].count++;
    }

    if (answer === pattern3[index % pattern3.length]) {
      correctCounts[2].count++;
    }
  });

  correctCounts.sort((a, b) => b.count - a.count);

  const maxCount = correctCounts[0].count;

  // 모든 수포자가 문제를 하나도 맞추지 못한 경우
  if (maxCount === 0) return [];

  const highestScorers = correctCounts
    .filter((person) => person.count === maxCount)
    .map((person) => person.id);

  return highestScorers;
}
