import { atom } from 'recoil';

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
