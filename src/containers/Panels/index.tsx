import { h, FunctionComponent } from 'preact';
import { useRecoilState } from 'recoil';
import { puzzlePanelsState } from '../../atoms';
import { PanelsComponent } from '../../components/Panels';
import { getNumericPanelPuzzle } from '../../getPuzzle';

export const Panels: FunctionComponent = () => {
  const [puzzlePanels, setPuzzlePanels] = useRecoilState(puzzlePanelsState);

  const puzzle = getNumericPanelPuzzle(3);
  setPuzzlePanels(puzzle.panels);

  return <PanelsComponent panels={puzzlePanels} />;
};
