import { h, FunctionComponent } from 'preact';
import { AllClearedModal } from '../../containers/Modal/AllClearedModal';
import { Stage } from '../../containers/Stage';

type AppProps = {};

export const AppComponent: FunctionComponent<AppProps> = ({}) => (
  <div className="app-wrapper">
    <Stage />
    <AllClearedModal />
  </div>
);
