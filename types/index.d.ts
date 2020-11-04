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
  answerPanels: Panels;
  panels: Panels;
  size: number;
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

type StageTimeLimit = number;

type GameState = 'notReady' | 'ready' | 'playing' | 'cleared';
