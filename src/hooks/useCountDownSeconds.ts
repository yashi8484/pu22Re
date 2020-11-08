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

  const willStop = useMemo(() => !isActive && seconds > 0, [isActive, seconds]);

  const cleanup = useCallback(() => {
    setIsActive(false);
    clearInterval(intervalId);
    setIntervalId(undefined);
  }, [setIsActive, intervalId]);

  const handleFinished = useCallback(() => {
    cleanup();
    finishedHandler && finishedHandler();
  }, [cleanup, finishedHandler]);

  useEffect(() => {
    if (willStart) {
      const interval = window.setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setIntervalId(interval);
    } else if (willFinish) {
      setSeconds(0);
      handleFinished();
    } else if (willStop) {
      cleanup();
    }
  }, [willStart, willFinish, willStop, seconds]);

  useEffect(() => cleanup, []);

  return { isActive, setIsActive, seconds };
};
