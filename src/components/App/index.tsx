import { h, FunctionComponent } from 'preact';
import { useRecoilValue } from 'recoil';
import { ReadyModal } from '../../containers/Modal/ReadyModal';
import { Panels } from '../../containers/Panels';
import { isGameStateReadySelector } from '../../selectors';
import { CountDownComponent } from '../CountDown';

export const AppComponent: FunctionComponent = () => {
  const isReady = useRecoilValue(isGameStateReadySelector);

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
    </div>
  );
};
