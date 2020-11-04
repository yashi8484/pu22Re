import { useState, useMemo, useEffect, useCallback } from 'preact/hooks';

export const useCountDownSeconds = (
  initialSeconds: number,
  finishedHandler?: () => void,
) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  const willStart = useMemo(() => isActive && !intervalId, [
    isActive,
    intervalId,
  ]);

  const willFinish = useMemo(() => isActive && seconds < 0, [
    isActive,
    seconds,
  ]);

  const handleFinished = useCallback(() => {
    setIsActive(false);
    clearInterval(intervalId);
    setIntervalId(undefined);
    finishedHandler && finishedHandler();
  }, []);

  useEffect(() => {
    if (willStart) {
      const interval = window.setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setIntervalId(interval);
    } else if (willFinish) {
      handleFinished();
    }
  }, [isActive, seconds]);

  useEffect(() => () => intervalId && clearInterval(intervalId), []);

  return { isActive, setIsActive, seconds };
};
