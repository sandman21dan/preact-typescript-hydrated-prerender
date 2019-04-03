import { h, FunctionalComponent } from "preact";
import { Provider } from 'preact-redux';
import Intro from '../Intro';
import store from "../store";

import './App.scss';
import Init from "./Init";
import Posts from "../Posts";
import StoreWriter from "../StoreWriter";

const App: FunctionalComponent = () => (
  <Provider store={store}>
    <div class="app">
      <Init/>
      <header class="app__header"></header>
      <div class="app__content">
        <Intro />
        <Posts />
      </div>
      <footer class="app__footer"></footer>
      <StoreWriter />
    </div>
  </Provider>
);

export default App;
