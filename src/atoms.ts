import { atom } from 'recoil';

export const puzzlePanelsState = atom<Panels>({
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
