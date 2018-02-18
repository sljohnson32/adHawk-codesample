import { connect } from 'react-redux';
import { postTap } from '../actions';
import CurrentTaps from '../components/CurrentTaps';

const mapStateToProps = state => (
  {
    tapsData: state.tapsData
  }
);

const mapDispatchToProps = dispatch => ({
  addTap: (newTap) => {
    dispatch(postTap(newTap))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTaps);
