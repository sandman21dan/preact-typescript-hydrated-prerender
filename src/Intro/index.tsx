import { h, FunctionalComponent } from "preact";
import { connect } from "preact-redux";
import { RootState } from "../store/state";
import { increment } from '../store/actions';

import './Intro.scss';

interface IntroProps {
  counter: number;
  onIncrement: (arg?: any) => any;
}

const Intro: FunctionalComponent<IntroProps> = ({
  counter,
  onIncrement,
}) => (
  <section class="intro__container">
    <input type="text" value={counter} />
    <div class="intro__buttons">
      <button>Hello!</button>
      <button onClick={() => onIncrement()}>More</button>
    </div>
  </section>
);

const mapStateToProps = (state: RootState) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  onIncrement: increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
