import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';

type ClearedModalProps = {
  visible: boolean;
  onClickButton: () => void;
};

export const ClearedModalComponent: FunctionComponent<ClearedModalProps> = ({
  visible,
  onClickButton,
}) => (
  <ModalComponent visible={visible}>
    <div className="cleared-modal-emoji">🎉</div>
    <div className="cleared-modal-title">CONGRATULATIONS!</div>
    <button className="cleared-modal-button" onClick={onClickButton}>
      NEXT
    </button>
  </ModalComponent>
);
