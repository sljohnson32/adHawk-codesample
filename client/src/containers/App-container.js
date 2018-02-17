import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import App from '../components/App';
import { getAllData } from '../actions';

const mapStateToProps = state => (
  {
    tapsData: state.tapsData
  }
);

const mapDispatchToProps = dispatch => ({
  getAllData: () => {
    dispatch(getAllData())
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
