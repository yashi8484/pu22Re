import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';

type FailedModalProps = {
  visible: boolean;
};

export const FailedModalComponent: FunctionComponent<FailedModalProps> = ({
  visible,
}) => {
  return (
    <ModalComponent visible={visible}>
      <div className="failed-modal-emoji">☔️</div>
      <div className="failed-modal-title">FAILED...</div>
    </ModalComponent>
  );
};
