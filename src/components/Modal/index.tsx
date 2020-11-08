import { h, FunctionComponent, ComponentChildren } from 'preact';
import { OverlayComponent } from '../Overlay';

type ModalProps = {
  visible: boolean;
  children: ComponentChildren;
};

export const ModalComponent: FunctionComponent<ModalProps> = ({
  visible,
  children,
}) => (
  <OverlayComponent visible={visible}>
    <div className="modal-card">{children}</div>
  </OverlayComponent>
);
