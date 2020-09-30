interface PuzzlePanel {
  key: string;
  order: number;
  text: string;
}
type PuzzlePanels = PuzzlePanel[];

interface Puzzle {
  size: number;
  panels: PuzzlePanels;
  initialEmptyIndex: number;
}
type PuzzleSize = Puzzle['size'];
type PuzzleEmptyIndex = Puzzle['initialEmptyIndex'];
