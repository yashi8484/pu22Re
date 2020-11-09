import { h, FunctionComponent } from 'preact';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ReadyModalComponent } from '../../../components/Modal/ReadyModal';
import { isReadySelector, isNotReadySelector } from '../../../selectors';

export const ReadyModal: FunctionComponent = () => {
  const isNotReady = useRecoilValue(isNotReadySelector);
  const setIsReady = useSetRecoilState(isReadySelector);

  return (
    <ReadyModalComponent
      visible={isNotReady}
      onClickButton={() => setIsReady(true)}
    />
  );
};
