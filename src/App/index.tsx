import { h, FunctionalComponent } from "preact";
import { Provider } from 'preact-redux';
import Intro from '../Intro';
import store from "../store";

import './App.scss';

const App: FunctionalComponent = () => (
  <Provider store={store}>
    <div class="app">
      <header class="app__header"></header>
      <div class="app__content">
        <Intro />
      </div>
      <footer class="app__footer"></footer>
    </div>
  </Provider>
);

export default App;
