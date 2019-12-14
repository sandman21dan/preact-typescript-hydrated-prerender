import { h, FunctionalComponent } from 'preact';
import Router from 'preact-router';
import { Provider } from 'preact-redux';
import Intro from '../Intro';
import store from "../store";

import Init from './Init';
import Posts from '../Posts';
import StoreWriter from '../StoreWriter';
import { Header } from './Header';
import './App.scss';

const Home: FunctionalComponent = () => (
  <div>
    <Intro />
    <Posts />
  </div>
);

const About: FunctionalComponent = () => (
  <div>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur corporis explicabo qui, reprehenderit ullam fuga harum laudantium, quasi voluptatem officia quae facere saepe praesentium sit tempora nostrum blanditiis. Nam!</p>
  </div>
);

const App: FunctionalComponent = () => (
  <Provider store={store}>
    <div class="app">
      <Init/>
      <Header />
      <div class="app__content">
        <Router>
          <Home path="/"/>
          <About path="/about"/>
        </Router>
      </div>
      <footer class="app__footer"></footer>
      <StoreWriter />
    </div>
  </Provider>
);

export default App;
