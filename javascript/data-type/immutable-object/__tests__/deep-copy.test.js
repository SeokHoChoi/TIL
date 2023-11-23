const testObject = {
  string: 'Hello, World!',
  number: 42,
  boolean: true,

  array: [1, 2, 3, { nested: 'array' }],

  object: {
    prop1: 'property 1',
    prop2: 123,
    prop3: {
      nestedProp: 'nested property',
    },
  },

  map: new Map([
    ['key1', 'value1'],
    ['key2', { nested: 'value2' }],
  ]),

  set: new Set([1, 'two', { nested: 'set' }]),
};

const checkInstance = (instance, constructor) => {
  return instance instanceof constructor;
};

const deepCopy = (target, visited = new WeakMap()) => {
  if (visited.has(target)) {
    return visited.get(target);
  }

  let copied;

  if (checkInstance(target, Map)) {
    copied = new Map();
    visited.set(target, copied);
    target.forEach((value, key) => {
      const deepCopiedMap = deepCopy(value, visited);
      copied.set(key, deepCopiedMap);
    });
  } else if (checkInstance(target, Set)) {
    copied = new Set();
    visited.set(target, copied);
    target.forEach((value) => {
      const deepCopiedSet = deepCopy(value, visited);
      copied.add(deepCopiedSet);
    });
  } else if (Array.isArray(target)) {
    // 수정된 부분
    copied = [];
    visited.set(target, copied);
    target.forEach((element) => {
      const deepCopiedElement = deepCopy(element, visited);
      copied.push(deepCopiedElement);
    });
  } else if (checkInstance(target, Object)) {
    copied = {};
    visited.set(target, copied);
    for (const key in target) {
      copied[key] = deepCopy(target[key], visited);
    }
  } else {
    copied = target;
  }

  return copied;
};

describe('deepCopy', () => {
  it('대상 객체(object), Map, Set에 대한 깊은 복사가 안정적으로 수행되었는지 확인합니다.', () => {
    // deepCopy 함수로 객체 복사
    const deepCopyResult = deepCopy(testObject);

    // 예상 결과와 실제 결과 비교
    expect(deepCopyResult).toEqual(testObject);
  });
});
