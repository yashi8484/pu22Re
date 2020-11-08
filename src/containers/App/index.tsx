import { h, FunctionComponent } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useRecoilState, useRecoilValue } from 'recoil';
import { stageTimeLimitState } from '../../atoms';
import { AppComponent } from '../../components/App';
import {
  currentStagePuzzleSelector,
  isGameStateClearedSelector,
  isGameStateFailedSelector,
  isGameStatePlayingSelector,
  isGameStateReadySelector,
  stagePuzzleSelector,
} from '../../selectors';
import { isCorrect } from '../../utils/panels';

export const App: FunctionComponent = () => {
  const stagePuzzle = useRecoilValue(stagePuzzleSelector);
  const stageTimeLimit = useRecoilValue(stageTimeLimitState);
  const [currentPuzzle, setCurrentPuzzle] = useRecoilState(
    currentStagePuzzleSelector,
  );
  const isReady = useRecoilValue(isGameStateReadySelector);
  const [isPlaying, goNextGameState] = useRecoilState(
    isGameStatePlayingSelector,
  );
  const isCleared = useRecoilValue(isGameStateClearedSelector);
  const isFailed = useRecoilValue(isGameStateFailedSelector);

  const onTimerFinished = useCallback(() => {
    goNextGameState(false);
  }, []);

  useEffect(() => {
    setCurrentPuzzle(stagePuzzle);
  }, [stagePuzzle]);

  useEffect(() => {
    if (isCorrect(currentPuzzle.panels, stagePuzzle.answerPanels)) {
      goNextGameState(true);
    }
  }, [stagePuzzle, currentPuzzle.panels]);

  return (
    <AppComponent
      timeLimit={stageTimeLimit}
      isReady={isReady}
      isPlaying={isPlaying}
      isCleared={isCleared}
      isFailed={isFailed}
      onTimerFinished={onTimerFinished}
    />
  );
};
