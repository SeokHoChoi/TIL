export const alignForCutting = (sizes) => {
  return sizes.map(([width, height]) => {
    const isLongerWidthCard = width > height;
    const longerWidth = [width, height];
    const longerHeight = [height, width];

    return isLongerWidthCard ? longerWidth : longerHeight;
  });
};

export const decideSizeWallet = (sortedCards) => {
  const fixedWalletSize = sortedCards.reduce(
    ([maxWidth, maxHeight], [width, height]) => {
      return [Math.max(maxWidth, width), Math.max(maxHeight, height)];
    },
    [0, 0]
  );

  return fixedWalletSize;
};

export function solution(sizes) {
  const sortedCards = alignForCutting(sizes);
  const fixedWalletSize = decideSizeWallet(sortedCards);
  const [width, heigth] = fixedWalletSize;
  const walletSize = width * heigth;

  return walletSize;
}
