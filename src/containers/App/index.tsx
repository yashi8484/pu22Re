import { h, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { useSetRecoilState } from 'recoil';
import { AppComponent } from '../../components/App';
import { isNotReadySelector } from '../../selectors';

export const App: FunctionComponent = () => {
  const setIsNotReady = useSetRecoilState(isNotReadySelector);

  useEffect(() => setIsNotReady(true), []);

  return <AppComponent />;
};
