import { h, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { stageIndexState, stagesState } from '../../atoms';
import { AppComponent } from '../../components/App';
import { currentStageSelector, isNotReadySelector } from '../../selectors';

export const App: FunctionComponent = () => {
  const stages = useRecoilValue(stagesState);
  const currentStageIndex = useRecoilValue(stageIndexState);
  const setCurrentStage = useSetRecoilState(currentStageSelector);
  const setIsNotReady = useSetRecoilState(isNotReadySelector);

  useEffect(() => setIsNotReady(true), []);

  useEffect(() => {
    setCurrentStage(stages[currentStageIndex]);
  }, [currentStageIndex]);

  return <AppComponent />;
};
