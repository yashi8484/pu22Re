import { h, FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { OnboardingModalComponent } from '../../../components/Modal/OnboardingModal';
import { isNotReadySelector, isOnboardingSelector } from '../../../selectors';

export const OnboardingModal: FunctionComponent = () => {
  const isOnboarding = useRecoilValue(isOnboardingSelector);
  const setIsNotReady = useSetRecoilState(isNotReadySelector);

  const onClickButton = useCallback(() => {
    setIsNotReady(true);
  }, []);

  return (
    <OnboardingModalComponent
      visible={isOnboarding}
      onClickButton={() => onClickButton()}
    />
  );
};
