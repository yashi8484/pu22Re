import { h, FunctionComponent } from 'preact';
import { useRecoilValue } from 'recoil';
import { stageTimeLimitState } from '../../atoms';
import { ReadyModal } from '../../containers/Modal/ReadyModal';
import { Panels } from '../../containers/Panels';
import {
  isGameStateClearedSelector,
  isGameStatePlayingSelector,
  isGameStateReadySelector,
} from '../../selectors';
import { CountDownComponent } from '../CountDown';
import { ClearedModalComponent } from '../Modal/ClearedModal';
import { TimerComponent } from '../Timer';

export const AppComponent: FunctionComponent = () => {
  const isReady = useRecoilValue(isGameStateReadySelector);
  const isPlaying = useRecoilValue(isGameStatePlayingSelector);
  const isCleared = useRecoilValue(isGameStateClearedSelector);
  const stageTimeLimit = useRecoilValue(stageTimeLimitState);

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <TimerComponent initialSeconds={stageTimeLimit} isActive={isPlaying} />
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
        <CountDownComponent initialSeconds={3} finishedText="START!" />
      ) : null}
      <ClearedModalComponent visible={isCleared} />
    </div>
  );
};
