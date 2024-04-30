// npm test -- dont-like-same-numbers.test.js

class Stack {
  push() {}
  size() {}
  empty() {}
  checkSameNumbers() {}
}
describe('연속되지 않는 숫자를 저장하는 스택', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack([]);
  });

  describe('push method', () => {
    it('값을 스택 뒤쪽에 계속해서 추가합니다.', () => {
      stack.push(1);
      expect(stack.stack).toEqual([1]);
      stack.push(2);
      expect(stack.stack).toEqual([1, 2]);
    });
  });

  describe('size method', () => {
    it('스택의 사이즈를 반환합니다.', () => {
      expect(stack.size()).toBe(0);
      stack.push(1);
      expect(stack.size()).toBe(1);
      stack.push(2);
      expect(stack.size()).toBe(2);
    });
  });

  describe('스택의 값이 있는지 확인합니다.', () => {
    describe('스택이 비어 있다면', () => {
      it('true를 반환 합니다.', () => {
        expect(stack.empty()).toBe(true);
      });
    });

    describe('스택이 비어있지 않다면', () => {
      it('false를 반환 합니다', () => {
        stack.push(1);
        expect(stack.empty()).toBe(false);
      });
    });
  });

  describe('checkSameNumbers 메서드는 스택에 연속적으로 같은값이 적재됐는지 확인합니다.', () => {
    describe('무조건적으로 스택의 뒤쪽에 값을 적재 후,', () => {
      describe('연속적으로 같은값이 있다면,', () => {
        it('스택에서 중복된 가장 최신값을 제거합니다.', () => {
          stack = new Stack([1, 1, 2, 2, 3]);
          expect(stack.stack).toEqual([1, 2, 3]);
        });
      });

      describe('연속적으로 같은값이 없다면,', () => {
        it('메서드를 종료합니다.', () => {
          stack = new Stack([1, 2, 5]);
          expect(stack.stack).toEqual([1, 2, 5]);
        });
      });
    });
  });
});
