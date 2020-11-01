import {
  sortPanelsByOrder,
  getPanelIndex,
  getNeighborEmptyPanelIndex,
} from './panels';

const swapPanels = (
  targetIndexes: [number, number],
  panels: Panels,
): Panels => {
  const newPanels = panels.slice(0);
  [newPanels[targetIndexes[0]], newPanels[targetIndexes[1]]] = swapPanel(
    newPanels[targetIndexes[0]],
    newPanels[targetIndexes[1]],
  );
  // side effect...
  sortPanelsByOrder(newPanels);

  return newPanels;
};

const swapPanel = (panelA: Panel, panelB: Panel): [Panel, Panel] => [
  { ...panelA, order: panelB.order },
  { ...panelB, order: panelA.order },
];

export const swapPanelForEmptyPanel = (
  targetId: PanelId,
  panels: Panels,
  puzzleSize: PuzzleSize,
): Panels => {
  const targetPanelIndex = getPanelIndex(targetId, panels);
  const emptyPanelIndex = getNeighborEmptyPanelIndex(
    targetId,
    panels,
    puzzleSize,
  );
  return emptyPanelIndex !== null
    ? swapPanels([emptyPanelIndex, targetPanelIndex], panels)
    : panels;
};
