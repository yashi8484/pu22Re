import { h, FunctionComponent } from 'preact';
import { CountDown } from '../../containers/CountDown';
import { ReadyModal } from '../../containers/Modal/ReadyModal';
import { Panels } from '../../containers/Panels';
import { ClearedModalComponent } from '../Modal/ClearedModal';
import { FailedModalComponent } from '../Modal/FailedModal';
import { TimerComponent } from '../Timer';

type AppProps = {
  timeLimit: number;
  isReady: boolean;
  isPlaying: boolean;
  isCleared: boolean;
  isFailed: boolean;
  onCountDownFinished: () => void;
  onTimerFinished: () => void;
};

export const AppComponent: FunctionComponent<AppProps> = ({
  timeLimit,
  isReady,
  isPlaying,
  isCleared,
  isFailed,
  onCountDownFinished,
  onTimerFinished,
}) => (
  <div className="app-wrapper">
    <div className="app-content">
      <TimerComponent
        initialSeconds={timeLimit}
        isActive={isPlaying}
        onFinished={() => onTimerFinished()}
      />
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
  </div>
);
