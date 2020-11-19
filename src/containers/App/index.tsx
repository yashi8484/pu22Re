import { h, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { stageIndexState, stagesState } from '../../atoms';
import { AppComponent } from '../../components/App';
import { currentStageSelector, isNotReadySelector } from '../../selectors';

export const App: FunctionComponent = () => {
  const stages = useRecoilValue(stagesState);
  const currentStageIndex = useRecoilValue(stageIndexState);
  const setCurrentStage = useSetRecoilState(currentStageSelector);
  const [isNotReady, setIsNotReady] = useRecoilState(isNotReadySelector);

  useEffect(() => setIsNotReady(true), []);

  useEffect(() => {
    isNotReady && setCurrentStage(stages[currentStageIndex]);
  }, [isNotReady]);

  useEffect(() => {
    setCurrentStage(stages[currentStageIndex]);
    document.documentElement.style.setProperty(
      '--stage-color',
      stages[currentStageIndex].color,
    );
  }, [currentStageIndex]);

  return <AppComponent />;
};
