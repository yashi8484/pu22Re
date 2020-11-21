import { swapPanel } from './swapPanels';

export const inPuzzleField = (
  panelCoordinate: PanelCoordinate,
  size: PuzzleSize,
): boolean =>
  panelCoordinate[0] >= 0 &&
  panelCoordinate[0] < size &&
  panelCoordinate[1] >= 0 &&
  panelCoordinate[1] < size;

export const sortPanelsByOrder = (panels: Panels): void => {
  panels.sort((a, b) => a.order - b.order);
};

export const isCorrect = (
  panels: Panels,
  answerPanels: Puzzle['answerPanels'],
): boolean =>
  answerPanels.length > 0 &&
  answerPanels.every((ap) => {
    const p = panels.find((p) => p.key === ap.key);
    return p && p.order === ap.order;
  });

export const shufflePanelOrders = (panels: Panels): void => {
  for (let i = panels.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [panels[i], panels[j]] = swapPanel(panels[i], panels[j]);
  }
};
