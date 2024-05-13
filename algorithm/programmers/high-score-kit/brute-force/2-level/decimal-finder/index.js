// 중복된 숫자를 제거하기 위해 Set을 사용하여 숫자 조합을 생성하는 함수
export function generateCombinations(numbers) {
  const combinations = new Set();

  function generate(prefix, remaining) {
    if (prefix.length > 0 && isPrime(Number(prefix))) {
      combinations.add(Number(prefix));
    }

    for (let i = 0; i < remaining.length; i++) {
      const nextPrefix = prefix + remaining[i];
      const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      generate(nextPrefix, nextRemaining);
    }
  }

  generate('', numbers);

  return combinations.size;
}

// 주어진 숫자가 소수인지 확인하는 함수
export function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export function solution(numbers) {
  return generateCombinations(numbers);
}
