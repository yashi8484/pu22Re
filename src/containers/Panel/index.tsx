import { h, ComponentProps, FunctionComponent } from 'preact';
import { useRecoilState } from 'recoil';
import { puzzlePanelsState } from '../../atoms';
import { PanelComponent } from '../../components/Panel';
import { swapPanelForEmptyPanel } from '../../utils/swapPanels';

type PanelProps = Pick<
  ComponentProps<typeof PanelComponent>,
  'id' | 'order' | 'text' | 'isEmpty'
>;

export const Panel: FunctionComponent<PanelProps> = (props) => {
  const [puzzlePanels, setPuzzlePanels] = useRecoilState(puzzlePanelsState);

  const onClickPanel = (id: PanelId) => {
    setPuzzlePanels(swapPanelForEmptyPanel(id, puzzlePanels));
  };

  return <PanelComponent {...props} onClick={onClickPanel} />;
};
