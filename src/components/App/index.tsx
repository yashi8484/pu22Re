import { h, FunctionComponent } from 'preact';
import { Stage } from '../../containers/Stage';

type AppProps = {};

export const AppComponent: FunctionComponent<AppProps> = ({}) => (
  <div className="app-wrapper">
    <Stage />
  </div>
);
