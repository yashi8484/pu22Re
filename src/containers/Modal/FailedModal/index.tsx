import { h, FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { FailedModalComponent } from '../../../components/Modal/FailedModal';
import {
  currentStageSelector,
  isFailedSelector,
  isNotReadySelector,
} from '../../../selectors';

export const FailedModal: FunctionComponent = () => {
  const isFailed = useRecoilValue(isFailedSelector);
  const setIsNotReady = useSetRecoilState(isNotReadySelector);
  const resetCurrentStage = useResetRecoilState(currentStageSelector);
  const currentStage = useRecoilValue(currentStageSelector);

  const onClickButton = useCallback(() => {
    resetCurrentStage();
    setIsNotReady(true);
  }, []);

  return (
    <FailedModalComponent
      visible={isFailed}
      subTitle={`ヒント: ${currentStage.hint}`}
      onClickButton={() => onClickButton()}
    />
  );
};
