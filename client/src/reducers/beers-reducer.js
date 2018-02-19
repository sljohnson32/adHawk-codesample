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

      case 'EDIT_BEER':
        return state.map(beer => {
          if (beer.id == action.beerData.id) {
            return action.beerData;
          } else return beer;
        });

      case 'DELETE_BEER':
        return state.map(beer => {
          if (beer.id == action.beerId) {
            beer.on_tap = false;
          };
          return beer
        });

    default:
      return state;
  }
};

export default beersData;
