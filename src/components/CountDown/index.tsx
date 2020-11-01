import { h, FunctionComponent, Fragment } from 'preact';
import { useSetRecoilState } from 'recoil';
import { useCountDownSeconds } from '../../hooks/useCountDownSeconds';
import { isGameStateReadySelector } from '../../selectors';

type CountDownProps = {
  initialSeconds: number;
  finishedText?: string;
};

export const CountDownComponent: FunctionComponent<CountDownProps> = ({
  initialSeconds,
  finishedText,
}) => {
  const goNextGameState = useSetRecoilState(isGameStateReadySelector);
  const countDownFinishedHandler = () => {
    goNextGameState(true);
  };

  const { isActive, seconds } = useCountDownSeconds(
    initialSeconds,
    countDownFinishedHandler,
  );

  return isActive ? (
    <Fragment>
      <div className={'count-down-wrapper'}>
        <div className={'count-down-seconds'}>
          {seconds === 0 ? finishedText || seconds : seconds}
        </div>
      </div>
    </Fragment>
  ) : null;
};
