export function solution(phone_book) {
  // 해시맵 생성
  const hash = new Map();

  // 중복된 번호인지 확인하고 해시맵에 전화번호 추가
  for (let number of phone_book) {
    if (hash.has(number)) {
      // 중복된 번호가 있으면 false 반환
      return false;
    }
    hash.set(number, true);
  }

  // 각 전화번호의 접두사가 해시맵에 있는지 확인
  for (let number of phone_book) {
    for (let i = 1; i < number.length; i++) {
      if (hash.has(number.slice(0, i))) {
        return false;
      }
    }
  }

  // 접두사가 없는 경우
  return true;
}
