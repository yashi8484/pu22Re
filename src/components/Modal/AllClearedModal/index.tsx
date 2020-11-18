import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';
import icon from '../../../assets/clover.svg';

type AllClearedModalProps = {
  visible: boolean;
};

export const AllClearedModalComponent: FunctionComponent<AllClearedModalProps> = ({
  visible,
}) => (
  <ModalComponent visible={visible}>
    <img src={icon} className="all-cleared-modal-icon" />
    <div className="all-cleared-modal-title">ALL CLEARED!!!</div>
  </ModalComponent>
);
