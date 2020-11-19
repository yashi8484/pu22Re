import { h, FunctionComponent } from 'preact';
import { ModalComponent } from '../';

type ReadyModalProps = {
  visible: boolean;
  title: string;
  subTitle: string;
  onClickButton: () => void;
};

export const ReadyModalComponent: FunctionComponent<ReadyModalProps> = ({
  visible,
  title,
  subTitle,
  onClickButton,
}) => (
  <ModalComponent visible={visible}>
    <div className="ready-modal-emoji">🚀</div>
    <div className="ready-modal-title">{title}</div>
    <div className="ready-modal-sub-title">{subTitle}</div>
    <button className="ready-modal-button" onClick={onClickButton}>
      スタート！
    </button>
  </ModalComponent>
);
