import { atom } from 'recoil';

export const puzzlePanelsState = atom<PuzzlePanels>({
  key: 'puzzlePanels',
  default: [
    {
      key: '',
      order: 1,
      text: '',
    },
  ],
});

export const puzzleSizeState = atom<PuzzleSize>({
  key: 'puzzleSize',
  default: 0,
});

export const puzzleEmptyIndexState = atom<PuzzleEmptyIndex>({
  key: 'puzzleEmptyIndex',
  default: 0,
});
