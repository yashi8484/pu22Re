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

type TimerFormat = 'minutesAndSeconds' | 'seconds';

type Stage = {
  puzzle: Puzzle;
  timeLimit: number;
  timerFormat?: TimerFormat;
  color: string;
  title: string;
  icon: string;
  hint: string;
};
type StageTimeLimit = Stage['timeLimit'];
type Stages = Stage[];

type GameState =
  | 'onboarding'
  | 'notReady'
  | 'ready'
  | 'playing'
  | 'cleared'
  | 'failed'
  | 'allCleared';
