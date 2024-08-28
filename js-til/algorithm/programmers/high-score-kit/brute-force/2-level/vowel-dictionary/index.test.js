import { calculateWordIndex, getVowelIndex, solution } from './index';

describe('모음 인덱스 테스트', () => {
  it('A의 인덱스는 0이어야 합니다.', () => {
    expect(getVowelIndex('A')).toBe(0);
  });
  it('E의 인덱스는 1이어야 합니다.', () => {
    expect(getVowelIndex('E')).toBe(1);
  });
  it('I의 인덱스는 2이어야 합니다.', () => {
    expect(getVowelIndex('I')).toBe(2);
  });
  it('O의 인덱스는 3이어야 합니다.', () => {
    expect(getVowelIndex('O')).toBe(3);
  });
  it('U의 인덱스는 4이어야 합니다.', () => {
    expect(getVowelIndex('U')).toBe(4);
  });
});

describe('단어 인덱스 계산 테스트', () => {
  it('단어 "AAAAE"는 6번째 단어여야 합니다.', () => {
    expect(calculateWordIndex('AAAAE')).toBe(6);
  });
  it('단어 "AAAE"는 10번째 단어여야 합니다.', () => {
    expect(calculateWordIndex('AAAE')).toBe(10);
  });
  it('단어 "I"는 1563번째 단어여야 합니다.', () => {
    expect(calculateWordIndex('I')).toBe(1563);
  });
  it('단어 "EIO"는 1189번째 단어여야 합니다.', () => {
    expect(calculateWordIndex('EIO')).toBe(1189);
  });
});

describe('solution 함수 테스트', () => {
  it('단어 "AAAAE"는 6번째 단어여야 합니다.', () => {
    expect(solution('AAAAE')).toBe(6);
  });
  it('단어 "AAAE"는 10번째 단어여야 합니다.', () => {
    expect(solution('AAAE')).toBe(10);
  });
  it('단어 "I"는 1563번째 단어여야 합니다.', () => {
    expect(solution('I')).toBe(1563);
  });
  it('단어 "EIO"는 1189번째 단어여야 합니다.', () => {
    expect(solution('EIO')).toBe(1189);
  });
});
