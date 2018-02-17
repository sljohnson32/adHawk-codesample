import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import TapCard from '../components/TapCard';
import { postBeer } from '../actions';

const mapStateToProps = state => (
  {
    beersData: state.beersData,
    allBreweries: state.beersData.map(beer => beer.brewer)
  }
);

const mapDispatchToProps = dispatch => ({
  addBeer: (currentId, newBeer) => {
    dispatch(postBeer(currentId, newBeer))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TapCard);
