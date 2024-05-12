function solution(answers) {
  const answer = [];
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const counts = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ];

  answers.forEach((num, index) => {
    if (num === arr1[index % arr1.length]) {
      counts[0].count++;
    }

    if (num === arr2[index % arr2.length]) {
      counts[1].count++;
    }

    if (num === arr3[index % arr3.length]) {
      counts[2].count++;
    }
  });

  counts.sort((a, b) => b.count - a.count);

  const maxCount = counts[0].count;
  counts.forEach((obj) => {
    if (obj.count === maxCount) {
      answer.push(obj.id);
    }
  });

  return answer;
}
