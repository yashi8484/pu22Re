import { selector } from 'recoil';
import { gameState, puzzleSizeState } from './atoms';
import { getNumericPanelPuzzle } from './utils/getPuzzle';

export const stagePuzzleSelector = selector({
  key: 'stagePuzzleSelector',
  get: ({ get }) => getNumericPanelPuzzle(get(puzzleSizeState)),
});

export const isGameStateNotReadySelector = selector({
  key: 'isGameStateNotReadySelector',
  get: ({ get }) => get(gameState) === 'notReady',
  set: ({ set }) => set(gameState, 'ready'),
});
