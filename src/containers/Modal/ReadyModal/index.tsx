import { h, FunctionComponent } from 'preact';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ReadyModalComponent } from '../../../components/Modal/ReadyModal';
import {
  isReadySelector,
  isNotReadySelector,
  currentStageNameSelector,
} from '../../../selectors';

export const ReadyModal: FunctionComponent = () => {
  const isNotReady = useRecoilValue(isNotReadySelector);
  const setIsReady = useSetRecoilState(isReadySelector);
  const stageName = useRecoilValue(currentStageNameSelector);

  return (
    <ReadyModalComponent
      visible={isNotReady}
      title={stageName}
      onClickButton={() => setIsReady(true)}
    />
  );
};
