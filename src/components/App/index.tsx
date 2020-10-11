import { h, FunctionComponent } from 'preact';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { puzzlePanelsState, puzzleSizeState } from '../../atoms';
import { Panels } from '../../containers/Panels';
import { stagePuzzleSelector } from '../../selectors';

export const AppComponent: FunctionComponent = () => {
  const setPuzzleSize = useSetRecoilState(puzzleSizeState);
  const setPuzzlePanels = useSetRecoilState(puzzlePanelsState);
  const puzzle = useRecoilValue(stagePuzzleSelector);

  setPuzzleSize(3);
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
