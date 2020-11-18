import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';
import icon from '../../../assets/sad.svg';

type FailedModalProps = {
  visible: boolean;
  onClickButton: () => void;
};

export const FailedModalComponent: FunctionComponent<FailedModalProps> = ({
  visible,
  onClickButton,
}) => (
  <ModalComponent visible={visible}>
    <img src={icon} className="failed-modal-icon" />
    <div className="failed-modal-title">ざんねん...</div>
    <button className="failed-modal-button" onClick={onClickButton}>
      もういちど
    </button>
  </ModalComponent>
);
