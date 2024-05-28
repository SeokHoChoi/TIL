import { solution } from '.';

describe('phone_book 접두어 문제', () => {
  it('시간 초과를 유발할 수 있는 큰 입력 테스트', () => {
    // phone_book 배열을 최대 크기로 생성합니다.
    const phone_book = [];
    for (let i = 0; i < 1000000; i++) {
      phone_book.push(i.toString().padStart(20, '0'));
    }
    phone_book.push('1'); // 접두어가 있는 경우를 추가합니다.

    const result = solution(phone_book);
    expect(result).toBe(false);
  });
});
