import { hasDuplicate, hasPrefix, solution } from '.';

describe('중복된 번호 확인', () => {
  it('중복된 번호가 있는 경우', () => {
    const phone_book = ['119', '97674223', '119'];
    expect(hasDuplicate(phone_book)).toBe(true);
  });

  it('중복된 번호가 없는 경우', () => {
    const phone_book = ['123', '456', '789'];
    expect(hasDuplicate(phone_book)).toBe(false);
  });
});

describe('접두사 확인', () => {
  it('접두사가 있는 경우', () => {
    const phone_book = ['119', '97674223', '1195524421'];
    expect(hasPrefix(phone_book)).toBe(true);
  });

  it('접두사가 없는 경우', () => {
    const phone_book = ['123', '456', '789'];
    expect(hasPrefix(phone_book)).toBe(false);
  });
});

describe('phone_book 접두어 문제', () => {
  it('기본 테스트 케이스1', () => {
    const phone_book = ['119', '97674223', '1195524421'];
    expect(solution(phone_book)).toBe(false);
  });

  it('기본 테스트 케이스2', () => {
    const phone_book = ['123', '456', '789'];
    expect(solution(phone_book)).toBe(true);
  });

  it('기본 테스트 케이스3', () => {
    const phone_book = ['12', '123', '1235', '567', '88'];
    expect(solution(phone_book)).toBe(false);
  });

  it('접두어가 없는 경우', () => {
    const phone_book = [
      '1234567890',
      '0987654321',
      '1111111111',
      '2222222222',
      '3333333333',
    ];
    expect(solution(phone_book)).toBe(true);
  });

  it('모두 같은 번호', () => {
    const phone_book = ['1234567890', '1234567890'];
    expect(solution(phone_book)).toBe(false);
  });

  it('시간 초과 테스트 케이스', () => {
    const phone_book = [];
    for (let i = 0; i < 1000000; i++) {
      phone_book.push(i.toString().padStart(20, '0'));
    }
    phone_book.push('0');
    expect(solution(phone_book)).toBe(false);
  });
});
