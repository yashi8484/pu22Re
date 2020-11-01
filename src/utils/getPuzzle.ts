export const getNumericPanelPuzzle = (size: PuzzleSize): Puzzle => {
  const panels = [...Array(size ** 2)].map((_, n) =>
    n === 0
      ? { key: `panel-${n + 1}`, order: n + 1 }
      : { key: `panel-${n + 1}`, order: n + 1, text: String(n + 1) },
  );
  return {
    answerPanels: panels.slice(0),
    panels: panels,
    size: size,
  };
};
