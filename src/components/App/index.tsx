import { h, FunctionComponent } from 'preact';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { puzzlePanelsState, puzzleSizeState } from '../../atoms';
import { Panels } from '../../containers/Panels';
import { getNumericPanelPuzzle } from '../../utils/getPuzzle';

export const AppComponent: FunctionComponent = () => {
  const setPuzzlePanels = useSetRecoilState(puzzlePanelsState);
  const [puzzleSize, setPuzzleSize] = useRecoilState(puzzleSizeState);

  setPuzzleSize(3);
  const puzzle = getNumericPanelPuzzle(puzzleSize);
  setPuzzlePanels(puzzle.panels);

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <div className="timer">88:88</div>
        <img
          src=""
          alt="puzzle"
          width="auto"
          height="auto"
          className="puzzle-image"
        />
        <Panels />
      </div>
    </div>
  );
};
