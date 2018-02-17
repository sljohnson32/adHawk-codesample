import { connect } from 'react-redux';
import CurrentTaps from '../components/CurrentTaps';

const mapStateToProps = state => (
  {
    tapsData: state.tapsData
  }
);

export default connect(mapStateToProps, null)(CurrentTaps);
