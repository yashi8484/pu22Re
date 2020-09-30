import { h, FunctionComponent } from 'preact';
import { useSetRecoilState } from 'recoil';
import { puzzlePanelsState } from '../../atoms';
import { Panels } from '../../containers/Panels';
import { getNumericPanelPuzzle } from '../../utils/getPuzzle';

export const AppComponent: FunctionComponent = () => {
  const setPuzzlePanels = useSetRecoilState(puzzlePanelsState);

  const puzzle = getNumericPanelPuzzle(3);
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
