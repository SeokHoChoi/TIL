import { solution } from './index';

describe('마라톤 참가자 중 완주하지 못한 사람을 찾는 함수', () => {
  it('모든 참가자가 완주했을 경우', () => {
    expect(solution(['홍길동', '이순신'], ['홍길동', '이순신'])).toBe(
      undefined
    );
  });

  it('한 명이 완주하지 못했을 경우', () => {
    expect(solution(['홍길동', '이순신', '강감찬'], ['홍길동', '강감찬'])).toBe(
      '이순신'
    );
  });

  it('중복된 이름이 있을 경우', () => {
    expect(solution(['홍길동', '홍길동', '이순신'], ['홍길동', '이순신'])).toBe(
      '홍길동'
    );
  });

  it('참가자가 한 명일 경우', () => {
    expect(solution(['홍길동'], [])).toBe('홍길동');
  });

  it('여러 사람이 완주하지 못했을 경우', () => {
    expect(
      solution(
        ['홍길동', '이순신', '강감찬', '김유신'],
        ['이순신', '강감찬', '김유신']
      )
    ).toBe('홍길동');
  });

  it('긴 배열 테스트 - 1,000,000명 참가자 중 한 명이 완주하지 못했을 경우', () => {
    const participant = Array.from({ length: 1000000 }, (_, i) => `참가자${i}`);
    const completion = participant.slice(0, participant.length - 1);
    expect(solution(participant, completion)).toBe(
      `참가자${participant.length - 1}`
    );
  });

  it('긴 배열 테스트 - 중복된 이름이 있는 경우', () => {
    const participant = Array.from(
      { length: 999999 },
      (_, i) => `참가자${i % 500000}`
    );
    const completion = participant.slice(1);
    expect(solution(participant, completion)).toBe(`참가자0`);
  });
});
