import { createTestObject } from './test-object.js';

const checkInstance = (instance, type) => {
  return Object.prototype.toString.call(instance) === type;
};

export const deepCopy = (target) => {
  if (checkInstance(target, '[object Array]')) {
    return [];
  }

  if (checkInstance(target, '[object Date]')) {
    return new Date(target);
  }

  if (checkInstance(target, '[object RegExp]')) {
    return new RegExp(target);
  }

  if (checkInstance(target, '[object Map]')) {
    return new Map();
  }

  if (checkInstance(target, '[object Set]')) {
    return new Set();
  }

  if (checkInstance(target, '[object Object]')) {
    return {};
  }

  return target;
};
const deepCopyResult = deepCopy(createTestObject());
