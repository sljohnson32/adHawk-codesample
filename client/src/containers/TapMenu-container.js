import { connect } from 'react-redux';
import TapMenu from '../components/TapMenu';
import { postBeer, putBeer, deleteBeer, putTap, deleteTap } from '../actions';

const mapDispatchToProps = dispatch => ({

  addBeer: (currentId, newBeer) => {
    dispatch(postBeer(currentId, newBeer));
  },

  editBeer: (beerId, beerData) => {
    dispatch(putBeer(beerId, beerData));
  },

  deleteBeer: (beerId) => {
    dispatch(deleteBeer(beerId));
  },

  editTap: (tapId, tapData) => {
    dispatch(putTap(tapId, tapData));
  },

  deleteTap: (tapId) => {
    dispatch(deleteTap(tapId));
  }

});

export default connect(null, mapDispatchToProps)(TapMenu);
