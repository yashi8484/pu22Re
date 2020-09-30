import { isEmptyPanel } from './puzzlePanel';

export const getPanelIndex = (panelId: PanelId, panels: Panels): number =>
  panels.findIndex((p) => p.key === panelId);

export const getEmptyPanelIndex = (panels: Panels): number => {
  const emptyPanel = panels.find((p) => isEmptyPanel(p));
  return emptyPanel === undefined ? -1 : getPanelIndex(emptyPanel.key, panels);
};

export const sortPanelsByOrder = (panels: Panels): Panels =>
  panels.sort((a, b) => a.order - b.order);
