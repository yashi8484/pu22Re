export type Puzzle = {
  size: number;
  panels: PuzzlePanel[];
  initialEmptyIndex: number;
};

export type PuzzlePanel = {
  key: string;
  order: number;
  text: string;
};

export type PuzzlePanels = PuzzlePanel[];

export const getNumericPanelPuzzle = (size: number): Puzzle => ({
  size: size,
  panels: [...Array(size ** 2)].map((_, n) => ({
    key: `panel-${n + 1}`,
    order: n + 1,
    text: String(n + 1),
  })),
  initialEmptyIndex: 0,
});
