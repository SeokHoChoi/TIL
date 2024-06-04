export function solution(clothes) {
  const clothesMap = {};

  clothes.forEach((items) => {
    const type = items[1];
    const isExist = !!clothesMap[type];
    const prevValue = isExist ? clothesMap[type] : 0;

    clothesMap[type] = prevValue + 1;
  });

  let answer = 1;
  for (const type in clothesMap) {
    const includingVacancies = clothesMap[type] + 1;
    answer *= includingVacancies;
  }

  const vacanciesEliminated = answer - 1;

  return vacanciesEliminated;
}
