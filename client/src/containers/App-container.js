import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
