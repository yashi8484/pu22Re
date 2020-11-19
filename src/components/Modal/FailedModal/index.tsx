import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';
import icon from '../../../assets/sad.svg';

type FailedModalProps = {
  visible: boolean;
  subTitle: string;
  onClickButton: () => void;
};

export const FailedModalComponent: FunctionComponent<FailedModalProps> = ({
  visible,
  subTitle,
  onClickButton,
}) => (
  <ModalComponent visible={visible}>
    <img src={icon} className="failed-modal-icon" />
    <div className="failed-modal-title">ざんねん...</div>
    <div className="failed-modal-sub-title">{subTitle}</div>
    <button className="failed-modal-button" onClick={onClickButton}>
      もういちど
    </button>
  </ModalComponent>
);
