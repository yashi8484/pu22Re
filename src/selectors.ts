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

export const isGameStateNotReadySelector = selector({
  key: 'isGameStateNotReadySelector',
  get: ({ get }) => get(gameState) === 'notReady',
  set: ({ set }) => set(gameState, 'ready'),
});

export const isGameStateReadySelector = selector({
  key: 'isGameStateReadySelector',
  get: ({ get }) => get(gameState) === 'ready',
  set: ({ set }) => set(gameState, 'playing'),
});

export const isGameStatePlayingSelector = selector({
  key: 'isGameStatePlayingSelector',
  get: ({ get }) => get(gameState) === 'playing',
  set: ({ set }) => set(gameState, 'cleared'),
});

export const isGameStateClearedSelector = selector({
  key: 'isGameStateClearedSelector',
  get: ({ get }) => get(gameState) === 'cleared',
});
