interface PuzzlePanel {
  key: string;
  order: number;
  text: string;
}
interface EmptyPanel {
  key: string;
  order: number;
}
type Panel = PuzzlePanel | EmptyPanel;
type Panels = Panel[];

interface Puzzle {
  size: number;
  panels: Panels;
}
type PuzzleSize = Puzzle['size'];
