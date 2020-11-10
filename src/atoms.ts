import { atom } from 'recoil';
import { getNumericPanelPuzzle } from './utils/getPuzzle';

export const stageIndexState = atom<number>({
  key: 'stageIndexState',
  default: 0,
});

export const puzzleAnswerPanelsState = atom<Panels>({
  key: 'puzzleAnswerPanelsState',
  default: [
    {
      key: '',
      order: 1,
      text: '',
    },
  ],
});

export const puzzlePanelsState = atom<Panels>({
  key: 'puzzlePanelsState',
  default: [
    {
      key: '',
      order: 1,
      text: '',
    },
  ],
});

export const puzzleSizeState = atom<PuzzleSize>({
  key: 'puzzleSizeState',
  default: 0,
});

export const timeLimitState = atom<StageTimeLimit>({
  key: 'timeLimitState',
  default: 0,
});

export const gameState = atom<GameState>({
  key: 'gameState',
  default: 'notReady',
});

export const stagesState = atom<Stages>({
  key: 'stagesState',
  default: [{ puzzle: getNumericPanelPuzzle(3), timeLimit: 142 }],
});
