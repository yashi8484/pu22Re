import { h, FunctionComponent } from 'preact';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { puzzleSizeState, puzzlePanelsState } from '../../atoms';
import { AppComponent } from '../../components/App';
import { stagePuzzleSelector } from '../../selectors';

export const App: FunctionComponent = () => {
  const setPuzzleSize = useSetRecoilState(puzzleSizeState);
  const setPuzzlePanels = useSetRecoilState(puzzlePanelsState);
  const puzzle = useRecoilValue(stagePuzzleSelector);

  setPuzzleSize(3);
  setPuzzlePanels(puzzle.panels);

  return <AppComponent />;
};
