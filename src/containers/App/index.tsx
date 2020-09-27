import { h, Component } from 'preact';
import { RecoilRoot } from 'recoil';
import { AppComponent } from '../../components/App';

export class App extends Component {
  render() {
    return (
      <RecoilRoot>
        <AppComponent />
      </RecoilRoot>
    );
  }
}
