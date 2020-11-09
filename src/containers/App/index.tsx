import { h, FunctionComponent } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useRecoilState, useRecoilValue } from 'recoil';
import { stageTimeLimitState } from '../../atoms';
import { AppComponent } from '../../components/App';
import {
  currentStagePuzzleSelector,
  isClearedSelector,
  isFailedSelector,
  isPlayingSelector,
  isReadySelector,
  stagePuzzleSelector,
} from '../../selectors';
import { isCorrect } from '../../utils/panels';

export const App: FunctionComponent = () => {
  const stagePuzzle = useRecoilValue(stagePuzzleSelector);
  const stageTimeLimit = useRecoilValue(stageTimeLimitState);
  const [currentPuzzle, setCurrentPuzzle] = useRecoilState(
    currentStagePuzzleSelector,
  );
  const isReady = useRecoilValue(isReadySelector);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingSelector);
  const [isCleared, setIsCleared] = useRecoilState(isClearedSelector);
  const [isFailed, setIsFailed] = useRecoilState(isFailedSelector);

  const onCountDownFinished = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const onTimerFinished = useCallback(() => {
    setIsFailed(true);
  }, []);

  useEffect(() => {
    setCurrentPuzzle(stagePuzzle);
  }, [stagePuzzle]);

  useEffect(() => {
    if (isCorrect(currentPuzzle.panels, stagePuzzle.answerPanels)) {
      setIsCleared(true);
    }
  }, [stagePuzzle, currentPuzzle.panels]);

  return (
    <AppComponent
      timeLimit={stageTimeLimit}
      isReady={isReady}
      isPlaying={isPlaying}
      isCleared={isCleared}
      isFailed={isFailed}
      onCountDownFinished={onCountDownFinished}
      onTimerFinished={onTimerFinished}
    />
  );
};
