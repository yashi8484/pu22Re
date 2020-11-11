import { h, FunctionComponent, Fragment } from 'preact';
import { CountDown } from '../../containers/CountDown';
import { ClearedModal } from '../../containers/Modal/ClearedModal';
import { FailedModal } from '../../containers/Modal/FailedModal';
import { ReadyModal } from '../../containers/Modal/ReadyModal';
import { Panels } from '../../containers/Panels';
import { Timer } from '../../containers/Timer';

type StageProps = {
  isReady: boolean;
  onCountDownFinished: () => void;
  onTimerFinished: () => void;
};

export const StageComponent: FunctionComponent<StageProps> = ({
  isReady,
  onCountDownFinished,
  onTimerFinished,
}) => (
  <Fragment>
    <Panels />
    <div className="stage-timer">
      <Timer onFinished={() => onTimerFinished()} />
    </div>
    <ReadyModal />
    {isReady ? (
      <CountDown
        initialSeconds={3}
        finishedText="START!"
        onFinished={() => onCountDownFinished()}
      />
    ) : null}
    <ClearedModal />
    <FailedModal />
  </Fragment>
);
