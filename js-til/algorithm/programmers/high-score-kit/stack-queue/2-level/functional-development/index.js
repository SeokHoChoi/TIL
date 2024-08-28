const makingDatesWork = (progresses, speeds) => {
  return progresses.map((progress, index) => {
    const remainingProgress = 100 - progress;
    const speed = speeds[index];
    const countingDate = Math.ceil(remainingProgress / speed);

    return countingDate;
  });
};

const makingDeployCounts = (datesWork) => {
  const answer = [];

  let maxDate = datesWork[0];
  let deployCount = 0;
  for (const date of datesWork) {
    if (date > maxDate) {
      answer.push(deployCount);
      maxDate = date;
      deployCount = 1;
      continue;
    }

    deployCount++;
  }
  answer.push(deployCount);

  return answer;
};

function solution(progresses, speeds) {
  const datesWork = makingDatesWork(progresses, speeds);

  return makingDeployCounts(datesWork);
}

export { makingDatesWork, makingDeployCounts, solution };
