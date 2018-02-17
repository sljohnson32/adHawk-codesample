import { connect } from 'react-redux';
import CurrentTaps from '../components/CurrentTaps';
// import { getAllTaps } from '../actions';

const mapStateToProps = state => (
  {
    tapsData: state.tapsData
  }
);

// const mapDispatchToProps = dispatch => ({
//   getAllTaps: () => {
//     dispatch(getAllTaps())
//   }
// });

export default connect(mapStateToProps, null)(CurrentTaps);
