import { h, FunctionalComponent } from 'preact';
import { connect } from 'preact-redux';
import { RootState } from '../store/state';

interface StoreWriterProps {
  state: any;
}

export const StoreWriter: FunctionalComponent<StoreWriterProps> = ({
  state,
}) => (
  <script id="app-state" type="application/json">{ JSON.stringify(state) }</script>
);

const mapStateToProps = (state: RootState) => ({
  state,
});

export default connect(mapStateToProps)(StoreWriter);
