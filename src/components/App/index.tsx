import { h, FunctionComponent } from 'preact';
import { useRecoilValue } from 'recoil';
import { ReadyModal } from '../../containers/Modal/ReadyModal';
import { Panels } from '../../containers/Panels';
import {
  isGameStateClearedSelector,
  isGameStateReadySelector,
} from '../../selectors';
import { CountDownComponent } from '../CountDown';
import { ClearedModalComponent } from '../Modal/ClearedModal';

export const AppComponent: FunctionComponent = () => {
  const isReady = useRecoilValue(isGameStateReadySelector);
  const isCleared = useRecoilValue(isGameStateClearedSelector);

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <div className="timer">88:88</div>
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
