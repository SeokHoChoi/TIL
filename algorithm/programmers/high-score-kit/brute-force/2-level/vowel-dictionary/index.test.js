import { solution } from './index';

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
