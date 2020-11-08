import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';

type ReadyModalProps = {
  visible: boolean;
  onClickButton: () => void;
};

export const ReadyModalComponent: FunctionComponent<ReadyModalProps> = ({
  visible,
  onClickButton,
}) => (
  <ModalComponent visible={visible}>
    <div className="ready-modal-emoji">🚀</div>
    <div className="ready-modal-title">READY?</div>
    <button className="ready-modal-button" onClick={onClickButton}>
      START!
    </button>
  </ModalComponent>
);
