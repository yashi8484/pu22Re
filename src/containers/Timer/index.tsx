import { h, FunctionComponent } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useRecoilValue } from 'recoil';
import { timeLimitState } from '../../atoms';
import { TimerComponent } from '../../components/Timer';
import { useCountDownSeconds } from '../../hooks/useCountDownSeconds';
import { currentStageSelector, isPlayingSelector } from '../../selectors';

type TimerProps = {
  onFinished: () => void;
};

export const Timer: FunctionComponent<TimerProps> = ({ onFinished }) => {
  const timeLimit = useRecoilValue(timeLimitState);
  const isPlaying = useRecoilValue(isPlayingSelector);
  const currentStage = useRecoilValue(currentStageSelector);
  const countDownFinishedHandler = useCallback(
    () => onFinished && onFinished(),
    [onFinished],
  );
  const { seconds, setIsActive } = useCountDownSeconds(
    timeLimit,
    countDownFinishedHandler,
  );
  useEffect(() => {
    setIsActive(isPlaying);
  }, [isPlaying]);

  return <TimerComponent seconds={seconds} format={currentStage.timerFormat} />;
};
