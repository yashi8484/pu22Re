import { h, FunctionComponent, Fragment } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useCountDownSeconds } from '../../hooks/useCountDownSeconds';
import { getMinutesAndSecondsString } from '../../utils/date';

type TimerProps = {
  initialSeconds: number;
  isActive: boolean;
  onFinished?: () => void;
};

export const TimerComponent: FunctionComponent<TimerProps> = ({
  initialSeconds,
  isActive,
  onFinished,
}) => {
  const countDownFinishedHandler = useCallback(
    () => onFinished && onFinished(),
    [onFinished],
  );
  const { seconds, setIsActive } = useCountDownSeconds(
    initialSeconds,
    countDownFinishedHandler,
  );
  useEffect(() => {
    setIsActive(isActive);
  }, [isActive, setIsActive]);

  return (
    <Fragment>
      <div className="timer">{getMinutesAndSecondsString(seconds)}</div>
    </Fragment>
  );
};
