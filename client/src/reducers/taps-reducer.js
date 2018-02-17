const tapsData = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_ALL_TAPS':
      return action.allData.taps;

    case 'ADD_TAP':
      return [state, ...action.tapData];

    default:
      return state;
  }
};

export default tapsData;
