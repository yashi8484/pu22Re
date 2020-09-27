import { h, Component, ComponentProps } from 'preact';
import { PanelComponent } from '../../components/Panel';
// import { selectedPanelId$ } from '../../store';

type PanelProps = Pick<
  ComponentProps<typeof PanelComponent>,
  'id' | 'order' | 'text' | 'isEmpty'
>;

export class Panel extends Component<PanelProps> {
  onClickPanel(panelId: string) {
    // selectedPanelId$.next(panelId);
  }

  componentDidMount() {
    // selectedPanelId$.subscribe({
    //   next: (panelKey) => panelKey,
    // });
  }

  render() {
    return <PanelComponent onClick={this.onClickPanel} {...this.props} />;
  }
}
