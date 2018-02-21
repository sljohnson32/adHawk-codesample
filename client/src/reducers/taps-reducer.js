const tapsData = (state = [], action) => {

  switch (action.type) {
    case 'RECEIVE_ALL_DATA':
      return action.allData.taps;

    case 'ADD_TAP':
      return [...state, action.newTap];

    case 'EDIT_TAP':
      return state.map(tap => {
        if (tap.id === action.tapData.id) {
          return action.tapData;
        } else return tap;
      });

    case 'DELETE_TAP':
      return state.filter(tap => tap.id !== action.tapId)

    default:
      return state;
  }
};

export default tapsData;
