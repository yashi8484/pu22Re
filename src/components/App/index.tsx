import { h, FunctionComponent } from 'preact';
import { AllClearedModal } from '../../containers/Modal/AllClearedModal';
import { OnboardingModal } from '../../containers/Modal/OnboardingModal';
import { Stages } from '../../containers/Stages';

type AppProps = {
  stagesVisible: boolean;
};

export const AppComponent: FunctionComponent<AppProps> = ({
  stagesVisible,
}) => (
  <div className="app-wrapper">
    <OnboardingModal />
    {stagesVisible && <Stages />}
    <AllClearedModal />
  </div>
);
