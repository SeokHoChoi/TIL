import { Queue } from './natural-number-queue';

describe('자연수를 저장하는 큐', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('자연수를 큐 뒤쪽에 넣습니다.', () => {
    it('입력한 값을 반환합니다.', () => {
      expect(queue.enqueue(1)).toBe(1);
      expect(queue.enqueue(4)).toBe(4);

      // 입력된 값이 잘 들어갔는지 제거 메서드를 통해 체크
      expect(queue.back()).toBe(4);
    });
  });

  describe('큐 앞쪽의 값을 제거합니다.', () => {
    describe('큐가 비어 있었다면', () => {
      it('-1 을 반환 합니다.', () => {
        expect(queue.dequeue()).toBe(-1);
      });
    });

    describe('큐에 값이 존재 한다면', () => {
      it('제거 후 그 값을 반환합니다.', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.front()).toBe(2);
      });
    });
  });

  describe('큐에 값이 있는지 확인합니다.', () => {
    describe('큐가 비어 있다면', () => {
      it('1을 반환 합니다.', () => {
        expect(queue.empty()).toBe(1);
      });
    });

    describe('큐가 비어있지 않다면', () => {
      it('0을 반환 합니다.', () => {
        queue.enqueue(1);
        expect(queue.empty()).toBe(0);
      });
    });
  });

  describe('큐에 몇 개의 자연수가 있는지 확인합니다.', () => {
    it('확인 후 그 개수를 그대로 반환합니다.', () => {
      expect(queue.size()).toBe(0);
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.size()).toBe(2);
    });
  });

  describe('큐 앞쪽에 값이 있는지 확인합니다.', () => {
    describe('값이 있다면', () => {
      it('해당 값을 반환합니다.', () => {
        queue.enqueue(5);
        expect(queue.front()).toBe(5);
      });
    });

    describe('값이 없다면', () => {
      it('-1 을 반환합니다.', () => {
        expect(queue.front()).toBe(-1);
      });
    });
  });

  describe('큐 뒤쪽에 값이 있는지 확인합니다.', () => {
    describe('값이 있다면', () => {
      it('해당 값을 반환합니다.', () => {
        queue.enqueue(5);
        expect(queue.back()).toBe(5);
      });
    });

    describe('값이 없다면', () => {
      it('-1 을 반환합니다.', () => {
        expect(queue.back()).toBe(-1);
      });
    });
  });
});
