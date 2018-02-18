import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import TapCard from '../components/TapCard';
import { postBeer } from '../actions';
import { filterBrewers } from './utilities';

const mapStateToProps = state => (
  {
    beersData: state.beersData,
    allBreweries: filterBrewers(state.beersData.map(beer => beer.brewer))
  }
);

const mapDispatchToProps = dispatch => ({
  addBeer: (currentId, newBeer) => {
    dispatch(postBeer(currentId, newBeer))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TapCard);
