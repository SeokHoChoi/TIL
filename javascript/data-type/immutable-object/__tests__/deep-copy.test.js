<<<<<<< HEAD
<<<<<<< HEAD
import { createTestObject } from '../test-object';
import { deepCopy } from '../deep-copy';

describe('deepCopy', () => {
  it('대상 객체(object), Map, Set에 대한 깊은 복사가 안정적으로 수행되었는지 확인합니다.', () => {
    // given
    const originalObject = createTestObject();

    // when
    const deepCopyResult = deepCopy(originalObject);

    // then
    // 예상 결과와 실제 결과 비교
    expect(deepCopyResult).toEqual(originalObject);

    // 원본 객체와 복사된 객체가 다른 참조를 가지는지 확인
    expect(deepCopyResult).not.toBe(originalObject);

    /**
     * 복사된 객체의 중첩된 객체도 원본과 다른 참조를 가지는지 확인
     *
     * has(): 주어진 요소가 존재하는지 그리고 참조가 동일한지 확인, true/false 반환
     * toBe(): 주어진 값이 예상한 값과 엄격하게 같은지 확인합니다. 즉, .toBe는 === 연산자를 사용하여 엄격한 동등성을 확인
     * .not: toBe() 결과 반전
     */

    // {}
    expect(deepCopyResult.object.prop3).not.toBe(originalObject.object.prop3);

    // []
    expect(deepCopyResult.array[3]).not.toBe(originalObject.array[3]);

    // map
    expect(deepCopyResult.map.get('key2')).not.toBe(
      originalObject.map.get('key2')
    );

    // set
    let isDeepCopy = true;
    originalObject.set.forEach((element) => {
      if (typeof element === 'object' && element !== null) {
        let hasNestedSet = deepCopyResult.set.has(element);
        if (!hasNestedSet) {
          for (let deepCopyElement of deepCopyResult.set) {
            if (
              typeof deepCopyElement === 'object' &&
              deepCopyElement !== null
            ) {
              if (JSON.stringify(element) === JSON.stringify(deepCopyElement)) {
                hasNestedSet = true;
                break;
              }
            }
          }
        }
        if (!hasNestedSet) {
          isDeepCopy = false;
        }
      }
    });
    expect(isDeepCopy).toBe(true);
  });
});
=======
>>>>>>> d51dcc9 (TddDeepCopy init)
=======
import { createTestObject } from '../test-object';

/**
 * 복사된 객체의 중첩된 객체도 원본과 다른 참조를 가지는지 확인
 *
 * has(): 주어진 요소가 존재하는지 그리고 참조가 동일한지 확인, true/false 반환
 * toBe(): 주어진 값이 예상한 값과 엄격하게 같은지 확인합니다. 즉, .toBe는 === 연산자를 사용하여 엄격한 동등성을 확인
 * .not: toBe() 결과 반전
 * toStrictEqual: , 두 객체가 엄격하게 같은지 확인, 엄격한 동일성이란,
 *  두 객체가 동일한 프로퍼티와 값을 가지고 있고, 그 프로퍼티들이 동일한 순서로 정렬되어 있으며,
 *  두 객체의 타입도 동일한지를 확인합니다.
 */

const deepCopy = () => {};
describe('deepCopy', () => {
  // given
  describe('Map을 포함하는 테스트 오브젝트에 대해서', () => {
    const originalObject = createTestObject();

    // when
    describe('깊은 복사가 되었다면', () => {
      const deepCopyResult = deepCopy(originalObject);

      // then
      it('복사된 객체를 반환합니다.', () => {
        expect(deepCopyResult.map).toStrictEqual(originalObject.map);
        expect(deepCopyResult.map.get('key2')).not.toBe(
          originalObject.map.get('key2')
        );
      });
    });
  });

  // given
  describe('Set을 포함하는 테스트 오브젝트에 대해서', () => {
    const originalObject = createTestObject();

    // when
    describe('깊은 복사가 되었다면', () => {
      const deepCopyResult = deepCopy(originalObject);

      // then
      it('복사된 객체를 반환합니다.', () => {
        expect(deepCopyResult.set).toStrictEqual(originalObject.set);
        expect(deepCopyResult.set).not.toBe(originalObject.set);
        let isDeepCopy = true;
        originalObject.set.forEach((element) => {
          if (typeof element === 'object' && element !== null) {
            let hasNestedSet = deepCopyResult.set.has(element);
            if (!hasNestedSet) {
              for (let deepCopyElement of deepCopyResult.set) {
                if (
                  typeof deepCopyElement === 'object' &&
                  deepCopyElement !== null
                ) {
                  if (
                    JSON.stringify(element) === JSON.stringify(deepCopyElement)
                  ) {
                    hasNestedSet = true;
                    break;
                  }
                }
              }
            }
            if (!hasNestedSet) {
              isDeepCopy = false;
            }
          }
        });
        expect(isDeepCopy).toBe(true);
      });
    });
  });

  // given
  describe('Array를 포함하는 테스트 오브젝트에 대해서', () => {
    const originalObject = createTestObject();

    // when
    describe('깊은 복사가 되었다면', () => {
      const deepCopyResult = deepCopy(originalObject);

      // then
      it('복사된 객체를 반환합니다.', () => {
        expect(deepCopyResult.array).toStrictEqual(originalObject.array);
        expect(deepCopyResult.array[3]).not.toBe(originalObject.array[3]);
      });
    });
  });

  // given
  describe('다른 경우에 대해서', () => {
    const originalObject = createTestObject();

    // when
    describe('깊은 복사가 되었다면', () => {
      const deepCopyResult = deepCopy(originalObject);

      // then
      it('복사된 객체를 반환합니다.', () => {
        // 엄격하게 동일한지 확인
        expect(deepCopyResult).toStrictEqual(originalObject);

        // 참조가 동일한지 확인
        expect(deepCopyResult).not.toBe(originalObject);

        expect(deepCopyResult.object.prop3).not.toBe(
          originalObject.object.prop3
        );
      });
    });
  });
});
>>>>>>> ed80a05 ([RED] 테스트 코드를 작성한 상태에서 깊은 복사 함수에 대한 테스트를 추가했습니다.)
