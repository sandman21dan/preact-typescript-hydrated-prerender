import { h, FunctionalComponent } from "preact";
import { connect } from "preact-redux";
import { RootState } from "../store/state.type";
import { increment } from '../store/actions';

import './Intro.scss';

interface IntroProps {
  counter: number;
  increment: (arg?: any) => any;
}

const Intro: FunctionalComponent<IntroProps> = ({
  counter,
  increment,
}) => (
  <section class="intro__container">
    <input type="text" value={counter} />
    <div class="intro__buttons">
      <button>Hello!</button>
      <button onClick={() => increment()}>More</button>
    </div>
  </section>
);

const mapStateToProps = (state: RootState) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
