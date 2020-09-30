export const getNumericPanelPuzzle = (size: PuzzleSize): Puzzle => ({
  size: size,
  panels: [...Array(size ** 2)].map((_, n) => ({
    key: `panel-${n + 1}`,
    order: n + 1,
    text: String(n + 1),
  })),
  initialEmptyIndex: 0,
});
