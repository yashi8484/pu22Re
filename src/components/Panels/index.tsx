import { h, FunctionComponent } from 'preact';
import { Panel } from '../../containers/Panel';
import { isPuzzlePanel } from '../../utils/puzzlePanel';

type PanelsProps = {
  panels: Panels;
};

export const PanelsComponent: FunctionComponent<PanelsProps> = ({ panels }) => (
  <div className="panels-wrapper">
    <div className="panels">
      {panels.map((panel) =>
        isPuzzlePanel(panel) ? (
          <Panel id={panel.key} order={panel.order} text={panel.text} />
        ) : (
          <Panel id={panel.key} order={panel.order} isEmpty />
        ),
      )}
    </div>
  </div>
);
