import { shufflePanelOrders } from './panels';

export const getNumericPanelPuzzle = (): Puzzle => {
  const answerPanels = [
    {
      key: 'panel-1',
      order: 7,
      text: 1,
    },
    {
      key: 'panel-2',
      order: 8,
      text: 2,
    },
    {
      key: 'panel-3',
      order: 9,
      text: 3,
    },
    {
      key: 'panel-4',
      order: 4,
      text: 4,
    },
    {
      key: 'panel-5',
      order: 5,
      text: 5,
    },
    {
      key: 'panel-6',
      order: 6,
      text: 6,
    },
    {
      key: 'panel-7',
      order: 1,
    },
    {
      key: 'panel-8',
      order: 2,
      text: 8,
    },
    {
      key: 'panel-9',
      order: 3,
      text: 9,
    },
  ];
  return getPanelPuzzle(answerPanels);
};

export const getIrohaPanelPuzzle = (): Puzzle => {
  const letters =
    'いろはにほへとちりぬるをわがよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせすん';
  const answerPanels = [
    {
      key: 'panel-1',
      order: 3,
      text: letters[0],
    },
    {
      key: 'panel-2',
      order: 6,
      text: letters[1],
    },
    {
      key: 'panel-3',
      order: 9,
      text: letters[2],
    },
    {
      key: 'panel-4',
      order: 2,
      text: letters[3],
    },
    {
      key: 'panel-5',
      order: 5,
      text: letters[4],
    },
    {
      key: 'panel-6',
      order: 8,
      text: letters[5],
    },
    {
      key: 'panel-7',
      order: 1,
    },
    {
      key: 'panel-8',
      order: 4,
      text: letters[7],
    },
    {
      key: 'panel-9',
      order: 7,
      text: letters[8],
    },
  ];
  return getPanelPuzzle(answerPanels);
};

const getPanelPuzzle = (answerPanels: Panels): Puzzle => {
  const panels = answerPanels.slice(0);
  shufflePanelOrders(panels);
  return {
    answerPanels: answerPanels,
    panels: panels,
    size: 3,
  };
};
