import { combineReducers } from 'redux';
import beersData from './beers-reducer';
import tapsData from './taps-reducer';

const rootReducer = combineReducers({
  beersData,
  tapsData
})

export default rootReducer;
