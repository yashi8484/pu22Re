export const isPuzzlePanel = (panel: Panel): panel is PuzzlePanel =>
  panel.hasOwnProperty('text');

export const isEmptyPanel = (panel: Panel): panel is EmptyPanel =>
  !isPuzzlePanel(panel);
