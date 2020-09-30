import { h, FunctionComponent } from 'preact';
import { useRecoilValue } from 'recoil';
import { puzzlePanelsState } from '../../atoms';
import { PanelsComponent } from '../../components/Panels';

export const Panels: FunctionComponent = () => {
  const puzzlePanels = useRecoilValue(puzzlePanelsState);

  return <PanelsComponent panels={puzzlePanels} />;
};
