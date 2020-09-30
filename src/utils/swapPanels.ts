import { sortPanelsByOrder, getPanelIndex, getEmptyPanelIndex } from './panels';

const swapPanels = (
  targetIndexes: [number, number],
  panels: Panels,
): Panels => {
  const newPanels = panels.slice(0);
  [newPanels[targetIndexes[0]], newPanels[targetIndexes[1]]] = swapPanel(
    newPanels[targetIndexes[0]],
    newPanels[targetIndexes[1]],
  );
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
): Panels => {
  const targetPanelIndex = getPanelIndex(targetId, panels);
  const emptyPanelIndex = getEmptyPanelIndex(panels);

  return swapPanels([emptyPanelIndex, targetPanelIndex], panels);
};
