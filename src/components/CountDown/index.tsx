import { h, FunctionComponent, Fragment } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
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
  const countDownFinishedHandler = useCallback(() => {
    goNextGameState(true);
  }, [goNextGameState]);
  const { setIsActive, seconds } = useCountDownSeconds(
    initialSeconds,
    countDownFinishedHandler,
  );
  useEffect(() => setIsActive(true), [setIsActive]);

  return (
    <Fragment>
      <div className={'count-down-wrapper'}>
        <div className={'count-down-seconds'}>
          {seconds === 0 ? finishedText || seconds : seconds}
        </div>
      </div>
    </Fragment>
  );
};
