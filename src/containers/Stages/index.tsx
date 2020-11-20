import { h, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { stageIndexState, stagesState } from '../../atoms';
import { StagesComponent } from '../../components/Stages';
import { currentStageSelector, isNotReadySelector } from '../../selectors';

export const Stages: FunctionComponent = () => {
  const stages = useRecoilValue(stagesState);
  const currentStageIndex = useRecoilValue(stageIndexState);
  const setCurrentStage = useSetRecoilState(currentStageSelector);
  const isNotReady = useRecoilValue(isNotReadySelector);

  useEffect(() => {
    isNotReady && setCurrentStage(stages[currentStageIndex]);
  }, [isNotReady]);

  useEffect(() => {
    setCurrentStage(stages[currentStageIndex]);
    document.documentElement.style.setProperty(
      '--theme-color',
      stages[currentStageIndex].color,
    );
  }, [currentStageIndex]);

  return <StagesComponent />;
};
