export function solution(phone_book) {
  // 해시맵 생성
  const hash = new Map();

  // 해시맵에 전화번호 추가
  for (let number of phone_book) {
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
