import { h, ComponentProps, FunctionComponent } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useSetRecoilState } from 'recoil';
import { CountDownComponent } from '../../components/CountDown';
import { useCountDownSeconds } from '../../hooks/useCountDownSeconds';
import { isPlayingSelector } from '../../selectors';

type CountDownProps = Pick<
  ComponentProps<typeof CountDownComponent>,
  'finishedText'
> & {
  initialSeconds: number;
};

export const CountDown: FunctionComponent<CountDownProps> = ({
  finishedText,
  initialSeconds,
}) => {
  const setIsPlaying = useSetRecoilState(isPlayingSelector);
  const countDownFinishedHandler = useCallback(() => {
    setIsPlaying(true);
  }, []);
  const { setIsActive, seconds } = useCountDownSeconds(
    initialSeconds,
    countDownFinishedHandler,
  );
  useEffect(() => setIsActive(true), [setIsActive]);

  return <CountDownComponent seconds={seconds} finishedText={finishedText} />;
};
