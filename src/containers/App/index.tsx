import { h, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { AppComponent } from '../../components/App';
import {
  currentStagePuzzleSelector,
  isGameStatePlayingSelector,
  stagePuzzleSelector,
} from '../../selectors';
import { isCorrect } from '../../utils/panels';

export const App: FunctionComponent = () => {
  const stagePuzzle = useRecoilValue(stagePuzzleSelector);
  const [currentPuzzle, setCurrentPuzzle] = useRecoilState(
    currentStagePuzzleSelector,
  );
  const goNextGameState = useSetRecoilState(isGameStatePlayingSelector);

  useEffect(() => {
    setCurrentPuzzle(stagePuzzle);
  }, [stagePuzzle, setCurrentPuzzle]);

  useEffect(() => {
    if (isCorrect(currentPuzzle.panels, stagePuzzle.answerPanels)) {
      goNextGameState(true);
    }
  }, [stagePuzzle, currentPuzzle.panels]);

  return <AppComponent />;
};
