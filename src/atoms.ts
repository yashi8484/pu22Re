import { atom } from 'recoil';
import {
  getAlphabetPanelPuzzle,
  getNumericPanelPuzzle,
} from './utils/getPuzzle';

export const stageIndexState = atom<number>({
  key: 'stageIndexState',
  default: 0,
});

export const puzzleAnswerPanelsState = atom<Panels>({
  key: 'puzzleAnswerPanelsState',
  default: [],
});

export const puzzlePanelsState = atom<Panels>({
  key: 'puzzlePanelsState',
  default: [],
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
  default: [
    { puzzle: getNumericPanelPuzzle(3), timeLimit: 142 },
    { puzzle: getAlphabetPanelPuzzle(3), timeLimit: 142 },
  ],
});
