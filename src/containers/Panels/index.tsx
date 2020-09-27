import { h, Component } from 'preact';
import { PanelsComponent } from '../../components/Panels';
// import { puzzle$, PanelStates, panelStates$ } from '../../store';
import { getNumericPanelPuzzle, PuzzlePanels } from '../../puzzle';
// import { getInitialPanelStates } from '../../logic';

type PanelsState = {
  // panels: PanelStates;
  panels: PuzzlePanels;
};

export class Panels extends Component<{}, PanelsState> {
  constructor() {
    super();
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    // panelStates$.subscribe({
    //   next: (panelStates) => this.setState({ panels: panelStates }),
    // });
    const puzzle = getNumericPanelPuzzle(3);
    this.setState({ panels: puzzle.panels });
    // puzzle$.next(puzzle);
    // panelStates$.next(getInitialPanelStates(puzzle));
  }

  render() {
    return <PanelsComponent panels={this.state.panels} />;
  }
}
