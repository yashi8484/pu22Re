import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';

type FailedModalProps = {
  visible: boolean;
  onClickButton: () => void;
};

export const FailedModalComponent: FunctionComponent<FailedModalProps> = ({
  visible,
  onClickButton,
}) => (
  <ModalComponent visible={visible}>
    <div className="failed-modal-emoji">☔️</div>
    <div className="failed-modal-title">FAILED...</div>
    <button className="failed-modal-button" onClick={onClickButton}>
      RETRY!
    </button>
  </ModalComponent>
);
