type PanelId = string;

interface PuzzlePanel {
  key: PanelId;
  order: number;
  text: string;
}
interface EmptyPanel {
  key: PanelId;
  order: number;
}
type Panel = PuzzlePanel | EmptyPanel;
type Panels = Panel[];

interface Puzzle {
  size: number;
  panels: Panels;
}
type PuzzleSize = Puzzle['size'];

interface NeighborPanelIndexes {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

type PanelCoordinate = [number, number];
interface NeighborPanelCoordinates {
  top: PanelCoordinate;
  left: PanelCoordinate;
  right: PanelCoordinate;
  bottom: PanelCoordinate;
}
