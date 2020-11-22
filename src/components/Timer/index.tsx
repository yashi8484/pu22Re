import { h, FunctionComponent } from 'preact';
import { getMinutesAndSecondsString } from '../../utils/date';

type TimerProps = {
  seconds: number;
  format?: TimerFormat;
};

export const TimerComponent: FunctionComponent<TimerProps> = ({
  seconds,
  format = 'minutesAndSeconds',
}) => (
  <div className="timer">
    {format === 'minutesAndSeconds'
      ? getMinutesAndSecondsString(seconds)
      : seconds}
  </div>
);
