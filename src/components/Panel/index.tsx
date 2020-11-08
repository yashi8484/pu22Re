import { h, FunctionComponent } from 'preact';
import clsx from 'clsx';

type PanelProps = {
  id: string;
  order: number;
  text?: string;
  isEmpty?: boolean;
  onClick?: (id: string) => void;
};

export const PanelComponent: FunctionComponent<PanelProps> = ({
  id,
  order,
  text,
  isEmpty = false,
  onClick,
}) => (
  <div
    key={id}
    className={clsx('panel', `order-${order}`, { empty: !!isEmpty })}
    onClick={() => onClick && onClick(id)}
  >
    {text}
  </div>
);
