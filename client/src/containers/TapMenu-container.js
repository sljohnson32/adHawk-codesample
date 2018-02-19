import { connect } from 'react-redux';
import TapMenu from '../components/TapMenu';
import { postBeer, putTap, deleteTap } from '../actions';

const mapDispatchToProps = dispatch => ({

  addBeer: (currentId, newBeer) => {
    dispatch(postBeer(currentId, newBeer))
  },

  editTap: (tapId, tapData) => {
    dispatch(putTap(tapId, tapData))
  },

  deleteTap: (tapId) => {
    dispatch(deleteTap(tapId))
  }

});

export default connect(null, mapDispatchToProps)(TapMenu);
