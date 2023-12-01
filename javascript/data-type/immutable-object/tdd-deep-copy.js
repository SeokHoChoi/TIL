import { createTestObject } from './test-object.js';

const isInstanceType = (instance, type) => {
  return Object.prototype.toString.call(instance) === type;
};

export const deepCopy = (target) => {
  if (isInstanceType(target, '[object Array]')) {
    return [];
  }

  if (isInstanceType(target, '[object Date]')) {
    return new Date(target);
  }

  if (isInstanceType(target, '[object RegExp]')) {
    return new RegExp(target);
  }

  if (isInstanceType(target, '[object Map]')) {
    return new Map();
  }

  if (isInstanceType(target, '[object Set]')) {
    return new Set();
  }

  if (isInstanceType(target, '[object Object]')) {
    return {};
  }

  return target;
};
const deepCopyResult = deepCopy(createTestObject());
