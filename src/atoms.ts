import { atom } from 'recoil';

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

export const gameState = atom<GameState>({
  key: 'gameState',
  default: 'notReady',
});
