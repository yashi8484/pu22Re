import {
  getNeighborPanelCoordinatesByIndex,
  getNeighborCoordinatesInPuzzleField,
  convertPanelCoordinateToIndex,
} from './panelCoordinate';
import { isEmptyPanel } from './puzzlePanel';

export const getPanelIndex = (panelId: PanelId, panels: Panels): number =>
  panels.findIndex((p) => p.key === panelId);

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
