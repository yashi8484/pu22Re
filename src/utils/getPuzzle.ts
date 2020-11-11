import { swapPanels } from './swapPanels';

export const getNumericPanelPuzzle = (size: PuzzleSize): Puzzle => {
  const answerPanels = [...Array(size ** 2)].map((_, n) =>
    n === 0
      ? { key: `panel-${n + 1}`, order: n + 1 }
      : { key: `panel-${n + 1}`, order: n + 1, text: String(n + 1) },
  );
  const panels = swapPanels([0, 1], answerPanels);
  return {
    answerPanels: answerPanels,
    panels: panels,
    size: size,
  };
};

export const getAlphabetPanelPuzzle = (size: PuzzleSize): Puzzle => {
  const answerPanels = [...Array(size ** 2)].map((_, n) =>
    n === 0
      ? { key: `panel-${n + 1}`, order: n + 1 }
      : {
          key: `panel-${n + 1}`,
          order: n + 1,
          text: String(String.fromCharCode('A'.charCodeAt(0) + n)),
        },
  );
  const panels = swapPanels([0, 3], answerPanels);
  return {
    answerPanels: answerPanels,
    panels: panels,
    size: size,
  };
};
