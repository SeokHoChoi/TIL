export function solution(numbers) {
  // 중복된 숫자를 제거하기 위해 Set을 사용합니다.
  const set = new Set();

  // 숫자 조합 생성 함수입니다.
  function generate(prefix, remaining) {
    if (prefix.length > 0) {
      // 생성된 숫자가 소수인지 확인하고 Set에 추가합니다.
      if (isPrime(Number(prefix))) {
        set.add(Number(prefix));
      }
    }

    // 주어진 숫자로 만들 수 있는 모든 숫자의 조합을 재귀적으로 생성합니다.
    for (let i = 0; i < remaining.length; i++) {
      const nextPrefix = prefix + remaining[i];
      const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      generate(nextPrefix, nextRemaining);
    }
  }

  // 주어진 숫자가 소수인지 확인하는 함수입니다.
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 숫자 조합 생성 함수를 호출합니다.
  generate('', numbers);

  // 생성된 숫자의 개수를 반환합니다.
  return set.size;
}
