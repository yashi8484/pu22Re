import { h, FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';
import { useRecoilValue } from 'recoil';
import { ClearedModalComponent } from '../../../components/Modal/ClearedModal';
import { isClearedSelector } from '../../../selectors';

export const ClearedModal: FunctionComponent = () => {
  const isCleared = useRecoilValue(isClearedSelector);

  const onClickButton = useCallback(() => {}, []);

  return (
    <ClearedModalComponent
      visible={isCleared}
      onClickButton={() => onClickButton()}
    />
  );
};
