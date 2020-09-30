import { selector } from 'recoil';
import { puzzlePanelsState, puzzleSizeState } from './atoms';

export const puzzleStateSelector = selector({
  key: 'puzzle',
  get: ({ get }) => ({
    size: get(puzzleSizeState),
    panels: get(puzzlePanelsState),
  }),
});
