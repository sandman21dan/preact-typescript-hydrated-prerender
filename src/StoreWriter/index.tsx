import { h, FunctionalComponent } from 'preact';
import { connect } from 'preact-redux';
import { RootState } from '../store/state';

interface StoreWriterProps {
  state: any;
}

export const StoreWriter: FunctionalComponent<StoreWriterProps> = ({
  state,
}) => {
  const appState = document.getElementById('app-state');
  if (appState) {
    appState.innerHTML = JSON.stringify(state);
  }

  return null
};

const mapStateToProps = (state: RootState) => ({
  state,
});

export default connect(mapStateToProps)(StoreWriter);
