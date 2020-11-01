import { h, FunctionComponent } from 'preact';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AppComponent } from '../../components/App';
import {
  currentStagePuzzleSelector,
  stagePuzzleSelector,
} from '../../selectors';

export const App: FunctionComponent = () => {
  const puzzle = useRecoilValue(stagePuzzleSelector);
  const setCurrentPuzzle = useSetRecoilState(currentStagePuzzleSelector);

  setCurrentPuzzle(puzzle);

  return <AppComponent />;
};
