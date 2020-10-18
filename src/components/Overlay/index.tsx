import { h, FunctionComponent, ComponentChildren } from 'preact';

type OverlayProps = {
  visible: boolean;
  children: ComponentChildren;
};

export const OverlayComponent: FunctionComponent<OverlayProps> = ({
  visible,
  children,
}) => {
  return visible ? <div className={'overlay'}>{children}</div> : null;
};
