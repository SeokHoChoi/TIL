export function solution(nums) {
  const upperLimit = nums.length / 2;
  const ponketmonTypes = new Set(nums);
  const isExceededLimit = upperLimit > ponketmonTypes.size;
  const receivedPonketmons = isExceededLimit ? ponketmonTypes.size : upperLimit;

  return receivedPonketmons;
}
