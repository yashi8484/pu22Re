import { h, FunctionComponent } from 'preact';
import { useRecoilState } from 'recoil';
import { ReadyModalComponent } from '../../../components/Modal/ReadyModal';
import { isGameStateNotReadySelector } from '../../../selectors';

export const ReadyModal: FunctionComponent = () => {
  const [isNotReady, goNextGameState] = useRecoilState(
    isGameStateNotReadySelector,
  );

  return (
    <ReadyModalComponent
      visible={isNotReady}
      onClickButton={() => goNextGameState(true)}
    />
  );
};
