import { getNeighborEmptyPanelIndex, getPanelIndex } from './panelIndex';
import { sortPanelsByOrder } from './panels';

const swapPanels = (targetIndexes: [number, number], panels: Panels): void => {
  [panels[targetIndexes[0]], panels[targetIndexes[1]]] = swapPanel(
    panels[targetIndexes[0]],
    panels[targetIndexes[1]],
  );
};

export const swapPanel = (panelA: Panel, panelB: Panel): [Panel, Panel] => [
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
  if (emptyPanelIndex !== null) {
    panels = panels.slice(0);
    swapPanels([emptyPanelIndex, targetPanelIndex], panels);
    sortPanelsByOrder(panels);
  }
  return panels;
};
