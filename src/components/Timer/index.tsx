import { h, FunctionComponent } from 'preact';
import { getMinutesAndSecondsString } from '../../utils/date';

type TimerProps = {
  seconds: number;
};

export const TimerComponent: FunctionComponent<TimerProps> = ({ seconds }) => (
  <div className="timer">{getMinutesAndSecondsString(seconds)}</div>
);
