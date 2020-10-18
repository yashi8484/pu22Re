import { h, render } from 'preact';
import { RecoilRoot } from 'recoil';
import 'preact/devtools';
import './index.css';
import { App } from './containers/App';

const rootElement = document.getElementById('root');
if (rootElement) {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>,
    rootElement,
  );
}
