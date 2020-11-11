import { h, FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { stageIndexState } from '../../../atoms';
import { ClearedModalComponent } from '../../../components/Modal/ClearedModal';
import {
  currentStageSelector,
  isClearedSelector,
  isNotReadySelector,
  nextStageSelector,
} from '../../../selectors';

export const ClearedModal: FunctionComponent = () => {
  const isCleared = useRecoilValue(isClearedSelector);
  const nextStage = useRecoilValue(nextStageSelector);
  const resetCurrentStage = useResetRecoilState(currentStageSelector);
  const setIsNotReady = useSetRecoilState(isNotReadySelector);
  const [stageIndex, setStageIndex] = useRecoilState(stageIndexState);

  const onClickButton = useCallback(() => {
    if (nextStage) {
      resetCurrentStage();
      setIsNotReady(true);
      setStageIndex(stageIndex + 1);
    }
  }, [stageIndex]);

  return (
    <ClearedModalComponent
      visible={isCleared}
      onClickButton={() => onClickButton()}
    />
  );
};
