import { h, FunctionComponent } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { puzzleAnswerPanelsState, puzzlePanelsState } from '../../atoms';
import { StageComponent } from '../../components/Stage';
import {
  isClearedSelector,
  isFailedSelector,
  isPlayingSelector,
  isReadySelector,
} from '../../selectors';
import { isCorrect } from '../../utils/panels';

export const Stage: FunctionComponent = () => {
  const answerPanels = useRecoilValue(puzzleAnswerPanelsState);
  const panels = useRecoilValue(puzzlePanelsState);
  const isReady = useRecoilValue(isReadySelector);
  const setIsPlaying = useSetRecoilState(isPlayingSelector);
  const [isCleared, setIsCleared] = useRecoilState(isClearedSelector);
  const [isFailed, setIsFailed] = useRecoilState(isFailedSelector);

  const onCountDownFinished = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const onTimerFinished = useCallback(() => {
    setIsFailed(true);
  }, []);

  useEffect(() => {
    if (isCorrect(panels, answerPanels)) {
      setIsCleared(true);
    }
  }, [panels, answerPanels]);

  return (
    <StageComponent
      isReady={isReady}
      isCleared={isCleared}
      isFailed={isFailed}
      onCountDownFinished={onCountDownFinished}
      onTimerFinished={onTimerFinished}
    />
  );
};
