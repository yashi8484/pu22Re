import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';

type AllClearedModalProps = {
  visible: boolean;
};

export const AllClearedModalComponent: FunctionComponent<AllClearedModalProps> = ({
  visible,
}) => (
  <ModalComponent visible={visible}>
    <div className="all-cleared-modal-emoji">😍</div>
    <div className="all-cleared-modal-title">ALL CLEARED!!!</div>
  </ModalComponent>
);
