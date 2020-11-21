import {
  getNeighborPanelCoordinatesByIndex,
  getNeighborCoordinatesInPuzzleField,
  convertPanelCoordinateToIndex,
} from './panelCoordinate';
import { isEmptyPanel } from './puzzlePanel';
import { swapPanel } from './swapPanels';

export const getPanelIndex = (panelId: PanelId, panels: Panels): number =>
  panels.findIndex((p) => p.key === panelId);

export const getEmptyPanelIndex = (panels: Panels): number => {
  const emptyPanel = panels.find((p) => isEmptyPanel(p));
  return emptyPanel === undefined ? -1 : getPanelIndex(emptyPanel.key, panels);
};

export const getNeighborEmptyPanelIndex = (
  panelId: PanelId,
  panels: Panels,
  size: PuzzleSize,
): number | null => {
  const panelIndex = getPanelIndex(panelId, panels);
  const neighborCoordinates = getNeighborPanelCoordinatesByIndex(
    panelIndex,
    size,
  );
  const coordinatesInPuzzleField = getNeighborCoordinatesInPuzzleField(
    neighborCoordinates,
    size,
  );
  const emptyPanelCoordinate = Object.entries(
    coordinatesInPuzzleField,
  ).find((c) =>
    isEmptyPanel(panels[convertPanelCoordinateToIndex(c[1]!, size)]),
  );
  return emptyPanelCoordinate && emptyPanelCoordinate[1]
    ? convertPanelCoordinateToIndex(emptyPanelCoordinate[1], size)
    : null;
};

export const inPuzzleField = (
  panelCoordinate: PanelCoordinate,
  size: PuzzleSize,
): boolean =>
  panelCoordinate[0] >= 0 &&
  panelCoordinate[0] < size &&
  panelCoordinate[1] >= 0 &&
  panelCoordinate[1] < size;

export const sortPanelsByOrder = (panels: Panels): Panels =>
  panels.sort((a, b) => a.order - b.order);

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
