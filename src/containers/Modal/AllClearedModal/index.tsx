import { h, FunctionComponent } from 'preact';
import { useRecoilValue } from 'recoil';
import { AllClearedModalComponent } from '../../../components/Modal/AllClearedModal';
import { isAllClearedSelector } from '../../../selectors';

export const AllClearedModal: FunctionComponent = () => {
  const isAllCleared = useRecoilValue(isAllClearedSelector);

  return <AllClearedModalComponent visible={isAllCleared} />;
};
