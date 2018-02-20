import { connect } from 'react-redux';
import TapForm from '../components/PopUpForms/TapForm';
import { filterBrewers } from '../utilities';

const mapStateToProps = state => (
  {
    allTapNames: state.tapsData.map(tap => tap.name)
  }
);

export default connect(mapStateToProps, null)(TapForm);
