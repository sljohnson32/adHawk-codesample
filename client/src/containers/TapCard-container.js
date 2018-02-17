import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import TapCard from '../components/TapCard';
import { postBeer } from '../actions';

const mapStateToProps = state => (
  {
    beersData: state.beersData
  }
);

const mapDispatchToProps = dispatch => ({
  addBeer: () => {
    dispatch(postBeer())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TapCard);
