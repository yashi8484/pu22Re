import { h, ComponentProps, FunctionComponent } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useSetRecoilState } from 'recoil';
import { CountDownComponent } from '../../components/CountDown';
import { useCountDownSeconds } from '../../hooks/useCountDownSeconds';
import { isGameStateReadySelector } from '../../selectors';

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
  const goNextGameState = useSetRecoilState(isGameStateReadySelector);
  const countDownFinishedHandler = useCallback(() => {
    goNextGameState(true);
  }, [goNextGameState]);
  const { setIsActive, seconds } = useCountDownSeconds(
    initialSeconds,
    countDownFinishedHandler,
  );
  useEffect(() => setIsActive(true), [setIsActive]);

  return <CountDownComponent seconds={seconds} finishedText={finishedText} />;
};
