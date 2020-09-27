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
}) => {
  const onClickHandler: HTMLDivElement['onclick'] = () => {
    onClick && onClick(id);
  };

  return (
    <div
      key={id}
      className={clsx('panel', `order-${order}`, { empty: !!isEmpty })}
      onClick={onClickHandler}
    >
      {text}
    </div>
  );
};
