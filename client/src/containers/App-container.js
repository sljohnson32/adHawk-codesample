import { connect } from 'react-redux';
import App from '../components/App';
import { getAllTaps } from '../actions';

const mapStateToProps = state => (
  {
    tapsData: state.tapsData
  }
);

const mapDispatchToProps = dispatch => ({
  getAllTaps: () => {
    dispatch(getAllTaps())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
