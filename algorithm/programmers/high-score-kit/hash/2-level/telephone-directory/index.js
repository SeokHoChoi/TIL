export function solution(phone_book) {
  let answer = true;
  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 0; j < phone_book.length; j++) {
      const number = phone_book[i];
      const len = number.length;
      if (i !== j && number === phone_book[j].slice(0, len)) {
        return false;
      }
    }
  }
  return answer;
}
