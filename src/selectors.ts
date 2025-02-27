import { DefaultValue, selector } from 'recoil';
import {
  gameState,
  puzzleAnswerPanelsState,
  puzzlePanelsState,
  puzzleSizeState,
  stageIndexState,
  stagesState,
  timeLimitState,
} from './atoms';

export const currentStageSelector = selector<Stage>({
  key: 'currentStageSelector',
  get: ({ get }) => get(stagesState)[get(stageIndexState)],
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(puzzleAnswerPanelsState);
      reset(puzzlePanelsState);
      reset(puzzleSizeState);
      reset(timeLimitState);
    } else {
      set(puzzleAnswerPanelsState, newValue.puzzle.answerPanels);
      set(puzzlePanelsState, newValue.puzzle.panels);
      set(puzzleSizeState, newValue.puzzle.size);
      set(timeLimitState, newValue.timeLimit);
    }
  },
});

export const currentStageNameSelector = selector<string>({
  key: 'currentStageNameSelector',
  get: ({ get }) => `ステージ${get(stageIndexState) + 1}`,
});

export const nextStageSelector = selector<Stage | undefined>({
  key: 'nextStageSelector',
  get: ({ get }) => {
    const nextStageIndex = get(stageIndexState) + 1;
    return nextStageIndex < get(stagesState).length
      ? get(stagesState)[nextStageIndex]
      : undefined;
  },
});

export const isOnboardingSelector = selector({
  key: 'isOnboardingSelector',
  get: ({ get }) => get(gameState) === 'onboarding',
  set: ({ set }) => set(gameState, 'onboarding'),
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

export const isPlayingSelector = selector({
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

export const isAllClearedSelector = selector({
  key: 'isAllClearedSelector',
  get: ({ get }) => get(gameState) === 'allCleared',
  set: ({ set }) => set(gameState, 'allCleared'),
});
