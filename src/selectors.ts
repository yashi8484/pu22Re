import { selector } from 'recoil';
import { puzzleSizeState } from './atoms';
import { getNumericPanelPuzzle } from './utils/getPuzzle';

export const stagePuzzleSelector = selector({
  key: 'stagePuzzleSelector',
  get: ({ get }) => getNumericPanelPuzzle(get(puzzleSizeState)),
});
