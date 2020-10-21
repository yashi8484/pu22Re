import { h, FunctionComponent } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { useSetRecoilState } from 'recoil';
import { isGameStateReadySelector } from '../../selectors';

type CountDownProps = {
  initialSeconds: number;
  finishedText?: string;
};

export const CountDownComponent: FunctionComponent<CountDownProps> = ({
  initialSeconds,
  finishedText,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  const willStart = useMemo(() => isActive && !intervalId, [
    isActive,
    intervalId,
  ]);

  const willFinish = useMemo(() => isActive && seconds < 0, [
    isActive,
    seconds,
  ]);

  const goNextState = useSetRecoilState(isGameStateReadySelector);

  useEffect(() => {
    if (willStart) {
      const interval = window.setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setIntervalId(interval);
    } else if (willFinish) {
      setIsActive(false);
      clearInterval(intervalId);
      setIntervalId(undefined);
      goNextState(true);
    }
  }, [seconds]);

  useEffect(() => () => intervalId && clearInterval(intervalId), []);

  return isActive ? (
    <div className={'count-down-seconds'}>
      {seconds === 0 ? finishedText || seconds : seconds}
    </div>
  ) : null;
};
