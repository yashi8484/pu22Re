import { h, ComponentProps, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { CountDownComponent } from '../../components/CountDown';
import { useCountDownSeconds } from '../../hooks/useCountDownSeconds';

type CountDownProps = Pick<
  ComponentProps<typeof CountDownComponent>,
  'finishedText'
> & {
  initialSeconds: number;
  onFinished: () => void;
};

export const CountDown: FunctionComponent<CountDownProps> = ({
  finishedText,
  initialSeconds,
  onFinished,
}) => {
  const { setIsActive, seconds } = useCountDownSeconds(
    initialSeconds,
    onFinished,
  );
  useEffect(() => setIsActive(true), []);

  return <CountDownComponent seconds={seconds} finishedText={finishedText} />;
};
