import { h, FunctionComponent } from 'preact';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ReadyModalComponent } from '../../../components/Modal/ReadyModal';
import {
  isReadySelector,
  isNotReadySelector,
  currentStageNameSelector,
  currentStageSelector,
} from '../../../selectors';

export const ReadyModal: FunctionComponent = () => {
  const isNotReady = useRecoilValue(isNotReadySelector);
  const setIsReady = useSetRecoilState(isReadySelector);
  const stageName = useRecoilValue(currentStageNameSelector);
  const currentStage = useRecoilValue(currentStageSelector);

  return (
    <ReadyModalComponent
      visible={isNotReady}
      icon={currentStage.icon}
      title={stageName}
      subTitle={currentStage.title}
      onClickButton={() => setIsReady(true)}
    />
  );
};
