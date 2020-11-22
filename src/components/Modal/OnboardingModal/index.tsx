import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';
import icon from '../../../assets/puzzle.svg';

type OnboardingModalProps = {
  visible: boolean;
  onClickButton: () => void;
};

export const OnboardingModalComponent: FunctionComponent<OnboardingModalProps> = ({
  visible,
  onClickButton,
}) => (
  <ModalComponent visible={visible}>
    <img src={icon} className="onboarding-modal-icon" />
    <div className="onboarding-modal-title">
      <div className="onboarding-modal-ruby">パズル</div>
      pu22le
    </div>
    <div className="onboarding-modal-description">
      パネルをタップ(クリック)してうごかそう。 <br />
      じかんないに、せいかいにたどりつこう！
    </div>
    <button className="onboarding-modal-button" onClick={onClickButton}>
      あそぶ！
    </button>
  </ModalComponent>
);
