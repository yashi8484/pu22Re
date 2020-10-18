import { h, FunctionComponent } from 'preact';
import { Panels } from '../../containers/Panels';

export const AppComponent: FunctionComponent = () => {
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
    </div>
  );
};
