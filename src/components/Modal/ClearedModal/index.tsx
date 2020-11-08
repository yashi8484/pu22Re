import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';

type ClearedModalProps = {
  visible: boolean;
};

export const ClearedModalComponent: FunctionComponent<ClearedModalProps> = ({
  visible,
}) => (
  <ModalComponent visible={visible}>
    <div className="cleared-modal-emoji">🎉</div>
    <div className="cleared-modal-title">CONGRATULATIONS!</div>
  </ModalComponent>
);
