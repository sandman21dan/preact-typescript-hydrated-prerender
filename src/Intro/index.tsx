import { h, FunctionalComponent } from "preact";

import './Intro.scss';

const Intro: FunctionalComponent = () => (
  <section class="intro__container">
    <input type="text" />
    <div class="intro__buttons">
      <button>Hello!</button>
      <button>More</button>
    </div>
  </section>
);

export default Intro;
