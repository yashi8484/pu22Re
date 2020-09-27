import { h, render } from 'preact';
import 'preact/devtools';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  render(<App />, rootElement);
}
