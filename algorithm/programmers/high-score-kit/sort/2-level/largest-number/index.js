export const compare = (a, b) => {
  const strA = a.toString();
  const strB = b.toString();

  return strB + strA - (strA + strB);
};

export function solution(numbers) {
  numbers.sort(compare);
  const result = numbers.join('');

  return result[0] !== '0' ? result : '0';
}
