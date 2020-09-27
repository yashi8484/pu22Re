import { h, render } from 'preact';
import 'preact/devtools';
import './index.css';
import { App } from './containers/App';

const rootElement = document.getElementById('root');
if (rootElement) {
  render(<App />, rootElement);
}
