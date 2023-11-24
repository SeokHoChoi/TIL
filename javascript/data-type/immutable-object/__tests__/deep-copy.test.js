import { createTestObject } from '../test-object';
import { deepCopy } from '../deep-copy';

describe('deepCopy', () => {
  it('대상 객체(object), Map, Set에 대한 깊은 복사가 안정적으로 수행되었는지 확인합니다.', () => {
    // deepCopy 함수로 객체 복사
    const deepCopyResult = deepCopy(createTestObject());

    // 예상 결과와 실제 결과 비교
    expect(deepCopyResult).toEqual(createTestObject());
  });
});
