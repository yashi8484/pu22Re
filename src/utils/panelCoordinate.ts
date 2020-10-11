import { inPuzzleField } from './panels';

export const getNeighborPanelCoordinatesByIndex = (
  panelIndex: number,
  size: PuzzleSize,
): NeighborPanelCoordinates =>
  getNeighborPanelCoordinates(convertPanelIndexToCoordinate(panelIndex, size));

export const convertPanelIndexToCoordinate = (
  panelIndex: number,
  size: PuzzleSize,
): PanelCoordinate => [panelIndex % size, Math.floor(panelIndex / size)];

export const convertPanelCoordinateToIndex = (
  panelCoordinate: PanelCoordinate,
  size: PuzzleSize,
): number => {
  return panelCoordinate[1] * size + panelCoordinate[0];
};

export const getNeighborPanelCoordinates = (
  panelCoordinate: PanelCoordinate,
): NeighborPanelCoordinates => ({
  top: [panelCoordinate[0], panelCoordinate[1] - 1],
  left: [panelCoordinate[0] - 1, panelCoordinate[1]],
  right: [panelCoordinate[0] + 1, panelCoordinate[1]],
  bottom: [panelCoordinate[0], panelCoordinate[1] + 1],
});

export const getNeighborCoordinatesInPuzzleField = (
  neighborCoordinates: NeighborPanelCoordinates,
  size: PuzzleSize,
): Partial<NeighborPanelCoordinates> => {
  const result: Record<string, any> = {};
  if (inPuzzleField(neighborCoordinates.top, size)) {
    result.top = neighborCoordinates.top;
  }
  if (inPuzzleField(neighborCoordinates.left, size)) {
    result.left = neighborCoordinates.left;
  }
  if (inPuzzleField(neighborCoordinates.right, size)) {
    result.right = neighborCoordinates.right;
  }
  if (inPuzzleField(neighborCoordinates.bottom, size)) {
    result.bottom = neighborCoordinates.bottom;
  }
  return result;
};
