import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';

type ReadyModalProps = {
  visible: boolean;
  icon: string;
  title: string;
  subTitle: string;
  onClickButton: () => void;
};

export const ReadyModalComponent: FunctionComponent<ReadyModalProps> = ({
  visible,
  icon,
  title,
  subTitle,
  onClickButton,
}) => (
  <ModalComponent visible={visible}>
    <img src={icon} className="ready-modal-icon" />
    <div className="ready-modal-title">{title}</div>
    <div className="ready-modal-sub-title">「{subTitle}」</div>
    <button className="ready-modal-button" onClick={onClickButton}>
      スタート！
    </button>
  </ModalComponent>
);
