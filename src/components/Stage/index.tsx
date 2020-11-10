import { h, FunctionComponent, Fragment } from 'preact';
import { CountDown } from '../../containers/CountDown';
import { ReadyModal } from '../../containers/Modal/ReadyModal';
import { Panels } from '../../containers/Panels';
import { Timer } from '../../containers/Timer';
import { ClearedModalComponent } from '../Modal/ClearedModal';
import { FailedModalComponent } from '../Modal/FailedModal';

type StageProps = {
  isReady: boolean;
  isCleared: boolean;
  isFailed: boolean;
  onCountDownFinished: () => void;
  onTimerFinished: () => void;
};

export const StageComponent: FunctionComponent<StageProps> = ({
  isReady,
  isCleared,
  isFailed,
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
    <ClearedModalComponent visible={isCleared} />
    <FailedModalComponent visible={isFailed} />
  </Fragment>
);
