import { h, FunctionComponent } from 'preact';
import { Panel } from '../../containers/Panel';
import { PuzzlePanels } from '../../puzzle';
// import { PanelStates, isPuzzlePanel } from '../../store';

type PanelsProps = {
  // panels: PanelStates;
  panels: PuzzlePanels;
};

export const PanelsComponent: FunctionComponent<PanelsProps> = ({ panels }) => (
  <div className="panel-wrapper">
    {panels.map((panel) => (
      // isPuzzlePanel(panel) ? (
      //   <Panel id={panel.key} order={panel.order} text={panel.text} />
      // ) : (
      //   <Panel id={panel.key} order={panel.order} isEmpty />
      // ),
      <Panel id={panel.key} order={panel.order} text={panel.text} />
    ))}
  </div>
);
