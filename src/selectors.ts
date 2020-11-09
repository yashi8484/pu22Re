import { DefaultValue, selector } from 'recoil';
import {
  gameState,
  puzzleAnswerPanelsState,
  puzzlePanelsState,
  puzzleSizeState,
} from './atoms';
import { getNumericPanelPuzzle } from './utils/getPuzzle';

export const stagePuzzleSelector = selector({
  key: 'stagePuzzleSelector',
  get: () => getNumericPanelPuzzle(3),
});

export const currentStagePuzzleSelector = selector<Puzzle>({
  key: 'currentStagePuzzleSelector',
  get: ({ get }) => ({
    answerPanels: get(puzzleAnswerPanelsState),
    panels: get(puzzlePanelsState),
    size: get(puzzleSizeState),
  }),
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(puzzleAnswerPanelsState);
      reset(puzzlePanelsState);
      reset(puzzleSizeState);
    } else {
      set(puzzleAnswerPanelsState, newValue.answerPanels);
      set(puzzlePanelsState, newValue.panels);
      set(puzzleSizeState, newValue.size);
    }
  },
});

export const isNotReadySelector = selector({
  key: 'isNotReadySelector',
  get: ({ get }) => get(gameState) === 'notReady',
  set: ({ set }) => set(gameState, 'notReady'),
});

export const isReadySelector = selector({
  key: 'isReadySelector',
  get: ({ get }) => get(gameState) === 'ready',
  set: ({ set }) => set(gameState, 'ready'),
});

export const isPlayingSelector = selector<boolean>({
  key: 'isPlayingSelector',
  get: ({ get }) => get(gameState) === 'playing',
  set: ({ set }) => set(gameState, 'playing'),
});

export const isClearedSelector = selector({
  key: 'isClearedSelector',
  get: ({ get }) => get(gameState) === 'cleared',
  set: ({ set }) => set(gameState, 'cleared'),
});

export const isFailedSelector = selector({
  key: 'isFailedSelector',
  get: ({ get }) => get(gameState) === 'failed',
  set: ({ set }) => set(gameState, 'failed'),
});
