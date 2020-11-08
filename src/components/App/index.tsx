import { h, FunctionComponent } from 'preact';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { stageTimeLimitState } from '../../atoms';
import { ReadyModal } from '../../containers/Modal/ReadyModal';
import { Panels } from '../../containers/Panels';
import {
  isGameStateClearedSelector,
  isGameStateFailedSelector,
  isGameStatePlayingSelector,
  isGameStateReadySelector,
} from '../../selectors';
import { CountDownComponent } from '../CountDown';
import { ClearedModalComponent } from '../Modal/ClearedModal';
import { FailedModalComponent } from '../Modal/FailedModal';
import { TimerComponent } from '../Timer';

export const AppComponent: FunctionComponent = () => {
  const isReady = useRecoilValue(isGameStateReadySelector);
  const isPlaying = useRecoilValue(isGameStatePlayingSelector);
  const isCleared = useRecoilValue(isGameStateClearedSelector);
  const isFailed = useRecoilValue(isGameStateFailedSelector);
  const stageTimeLimit = useRecoilValue(stageTimeLimitState);
  const goNextGameState = useSetRecoilState(isGameStatePlayingSelector);

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <TimerComponent
          initialSeconds={stageTimeLimit}
          isActive={isPlaying}
          onFinished={() => goNextGameState(false)}
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
        <CountDownComponent initialSeconds={3} finishedText="START!" />
      ) : null}
      <ClearedModalComponent visible={isCleared} />
      <FailedModalComponent visible={isFailed} />
    </div>
  );
};
