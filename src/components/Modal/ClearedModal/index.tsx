import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';
import icon from '../../../assets/cake.svg';

type ClearedModalProps = {
  visible: boolean;
  onClickButton: () => void;
};

export const ClearedModalComponent: FunctionComponent<ClearedModalProps> = ({
  visible,
  onClickButton,
}) => (
  <ModalComponent visible={visible}>
    <img src={icon} className="cleared-modal-icon" />
    <div className="cleared-modal-title">せいかい！</div>
    <button className="cleared-modal-button" onClick={onClickButton}>
      つぎへ
    </button>
  </ModalComponent>
);
