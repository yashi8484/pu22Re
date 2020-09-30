import { selector } from 'recoil';
import {
  puzzleEmptyIndexState,
  puzzlePanelsState,
  puzzleSizeState,
} from './atoms';

export const puzzleStateSelector = selector({
  key: 'puzzle',
  get: ({ get }) => ({
    size: get(puzzleSizeState),
    panels: get(puzzlePanelsState),
    initialEmptyIndex: get(puzzleEmptyIndexState),
  }),
});
