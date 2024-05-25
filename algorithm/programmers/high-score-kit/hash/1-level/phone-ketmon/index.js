export function solution(nums) {
  const number = nums.length / 2;

  const set = new Set(nums);

  return number > set.size ? set.size : number;
}
