import { alignForCutting, decideSizeWallet, solution } from './index';

describe('alignForCutting 함수 테스트', () => {
  it('명함의 재단을 위해 가로와 세로를 정렬한다', () => {
    const sizes = [
      [10, 5],
      [8, 12],
      [6, 6],
    ];
    const alignedCards = alignForCutting(sizes);
    expect(alignedCards).toEqual([
      [10, 5],
      [12, 8],
      [6, 6],
    ]);
  });

  it('가로가 세로보다 긴 카드는 가로를 먼저 반환한다', () => {
    const sizes = [
      [10, 5],
      [8, 12],
      [6, 6],
    ];
    const alignedCards = alignForCutting(sizes);
    expect(alignedCards[0]).toEqual([10, 5]);
    expect(alignedCards[1]).toEqual([12, 8]);
    expect(alignedCards[2]).toEqual([6, 6]);
  });
});

describe('decideSizeWallet 함수 테스트', () => {
  it('명함 지갑의 최대 크기를 결정한다', () => {
    const sortedCards = [
      [10, 5],
      [12, 8],
      [6, 6],
    ];
    const fixedWalletSize = decideSizeWallet(sortedCards);
    expect(fixedWalletSize).toEqual([12, 8]);
  });

  it('카드가 없는 경우에는 [0, 0]을 반환한다', () => {
    const sortedCards = [];
    const fixedWalletSize = decideSizeWallet(sortedCards);
    expect(fixedWalletSize).toEqual([0, 0]);
  });
});

describe('solution 함수 테스트', () => {
  it('카드를 자르는 데 필요한 지갑의 크기를 반환한다', () => {
    const sizes = [
      [10, 5],
      [8, 12],
      [6, 6],
    ];
    const walletSize = solution(sizes);
    expect(walletSize).toBe(96); // 12 * 8 = 96
  });

  it('카드가 없는 경우에는 0을 반환한다', () => {
    const sizes = [];
    const walletSize = solution(sizes);
    expect(walletSize).toBe(0);
  });
});
