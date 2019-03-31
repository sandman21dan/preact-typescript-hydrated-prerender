import { h, Component } from "preact";
import { connect } from "preact-redux";
import { init } from "../store/actions";

interface InitProps {
  onComponentMount: (arg?: any) => any;
}

class Init extends Component<InitProps> {
  componentDidMount() {
    this.props.onComponentMount();
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = {
  onComponentMount: init,
};

export default connect(null, mapDispatchToProps)(Init);
