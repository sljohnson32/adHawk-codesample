const tapsData = (state = [], action) => {

  switch (action.type) {
    case 'RECEIVE_ALL_DATA':
      return action.allData.taps;

    case 'ADD_TAP':
      return [...state, action.newTap];

    case 'DELETE_TAP':
      return state.filter(tap => tap.id !== action.tapId)

    default:
      return state;
  }
};

export default tapsData;
