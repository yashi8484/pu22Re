import { isEmptyPanel } from './puzzlePanel';

export const getNumericPanelPuzzle = (size: PuzzleSize): Puzzle => ({
  size: size,
  panels: [...Array(size ** 2)].map((_, n) =>
    n === 0
      ? { key: `panel-${n + 1}`, order: n + 1 }
      : { key: `panel-${n + 1}`, order: n + 1, text: String(n + 1) },
  ),
});
