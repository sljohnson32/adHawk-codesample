import { connect } from 'react-redux';
import TapCard from '../components/TapCard';
import { filterBrewers } from './utilities';

const mapStateToProps = state => (
  {
    beersData: state.beersData,
    allBreweries: filterBrewers(state.beersData.map(beer => beer.brewer)),
    tapHistory: state.beersData.filter(beer => beer.on_tap == false)
  }
);

export default connect(mapStateToProps, null)(TapCard);
