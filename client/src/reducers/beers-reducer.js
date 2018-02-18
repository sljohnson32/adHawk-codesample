const beersData = (state = [], action) => {
  switch (action.type) {

    case 'RECEIVE_ALL_DATA':
      return action.allData.beers

    case 'ADD_BEER':
      let { newBeer } = action;
      let newState = state.map(beer => {
        if (beer.tap_id == newBeer.tap_id && beer.on_tap) {
          beer.on_tap = false;
        };
        return beer;
      });
      newState.push(newBeer);
      return newState;


    default:
      return state;
  }
};

export default beersData;
