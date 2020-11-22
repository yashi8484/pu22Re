import { atom } from 'recoil';
import { getIrohaPanelPuzzle, getNumericPanelPuzzle } from './utils/getPuzzle';
import soundIcon from './assets/sound.svg';
import calculatorIcon from './assets/calculator.svg';

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
  default: 'onboarding',
});

export const stagesState = atom<Stages>({
  key: 'stagesState',
  default: [
    {
      puzzle: getNumericPanelPuzzle(),
      timeLimit: 222,
      color: 'var(--color-blue)',
      title: 'かず',
      icon: calculatorIcon,
      hint: 'アイコン',
    },
    {
      puzzle: getIrohaPanelPuzzle(),
      timeLimit: 142,
      color: 'var(--color-green)',
      title: 'うた',
      icon: soundIcon,
      hint: '｜｜｜',
    },
  ],
});
