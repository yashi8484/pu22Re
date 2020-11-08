import { h, FunctionComponent } from 'preact';
import { OverlayComponent } from '../Overlay';

type CountDownProps = {
  seconds: number;
  finishedText?: string;
};

export const CountDownComponent: FunctionComponent<CountDownProps> = ({
  seconds,
  finishedText = '0',
}) => (
  <OverlayComponent visible={true}>
    <div className={'count-down-seconds'}>
      {seconds <= 0 ? finishedText : seconds}
    </div>
  </OverlayComponent>
);
