import { createTestObject } from './test-object.js';

/**
 * @function isInstanceType - instance의 type 을 체크합니다.
 *
 * @param {Object} instance - Array, Map, Set, Object 등의 다양한 인스턴스가 들어옵니다.
 * @param {String} type - [object Object] 형식의 문자열이 들어옵니다.
 * @returns [object Object] 형식의 문자열을 반환합니다.
 */
const isInstanceType = (instance, type) => {
  return Object.prototype.toString.call(instance) === type;
};

/**
 * @function deepCopy - 깊은복사된 객체를 반환하는 함수입니다.
 *
 * @param {Object} target - Object, Array, Map, Set, Number, String 등의 타입이 들어옵니다.
 * @returns 깊은복사된 객체를 반환합니다.
 *
 * @description
 * null, undefined 등 깊은복사가 불필요한 값이 들어왔을때의 예외처리가 되어있지 않습니다.
 */
export const deepCopy = (target) => {
  if (isInstanceType(target, '[object Array]')) {
    return target.map((element) => deepCopy(element));
  }

  if (isInstanceType(target, '[object Date]')) {
    return new Date(target);
  }

  if (isInstanceType(target, '[object RegExp]')) {
    return new RegExp(target);
  }

  if (isInstanceType(target, '[object Map]')) {
    const map = new Map();
    target.forEach((value, key) => map.set(key, deepCopy(value)));
    return map;
  }

  if (isInstanceType(target, '[object Set]')) {
    const set = new Set();
    target.forEach((element) => set.add(deepCopy(element)));
    return set;
  }

  if (isInstanceType(target, '[object Object]')) {
    const obj = {};
    for (const key in target) {
      obj[key] = deepCopy(target[key]);
    }
    return obj;
  }

  return target;
};
const deepCopyResult = deepCopy(createTestObject());
console.log(deepCopyResult);
