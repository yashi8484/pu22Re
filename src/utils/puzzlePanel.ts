export const isPuzzlePanel = (panel: Panel): panel is PuzzlePanel =>
  panel.hasOwnProperty('text');
