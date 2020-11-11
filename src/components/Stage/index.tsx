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
    <div className="stage-content">
      <Timer onFinished={() => onTimerFinished()} />
      <img
        src=""
        alt="puzzle"
        width="auto"
        height="auto"
        className="puzzle-image"
      />
      <Panels />
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
