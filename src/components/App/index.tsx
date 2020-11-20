import { h, FunctionComponent } from 'preact';
import { AllClearedModal } from '../../containers/Modal/AllClearedModal';
import { Stages } from '../../containers/Stages';

type AppProps = {};

export const AppComponent: FunctionComponent<AppProps> = ({}) => (
  <div className="app-wrapper">
    <Stages />
    <AllClearedModal />
  </div>
);
