import { h, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { useRecoilState } from 'recoil';
import { AppComponent } from '../../components/App';
import { isOnboardingSelector } from '../../selectors';

export const App: FunctionComponent = () => {
  const [isOnboarding, setIsOnboarding] = useRecoilState(isOnboardingSelector);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--theme-color',
      'var(--color-orange)',
    );
    setIsOnboarding(true);
  }, []);

  return <AppComponent stagesVisible={!isOnboarding} />;
};
