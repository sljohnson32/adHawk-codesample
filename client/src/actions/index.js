import { get, post, put, del } from '../api_client'

//GET TAPS
const receiveAll = (allData) => {
  return {
    type: 'RECEIVE_ALL_DATA',
    allData
  }
}

export const getAllData = () => {
  let allData = {};
  return dispatch => {
    Promise.all([
      get('taps')
        .then(response => allData.taps = response),
      get('beers')
        .then(response => allData.beers = response)
    ]).then(() => {
        return dispatch(receiveAll(allData))
    })
  }
}


//POST TAP
const addTap = (newTap) => {
  return {
    type: 'ADD_TAP',
    newTap
  }
}

export const postTap = (tapData) => {
  console.log(tapData)
  return dispatch => {
    post('taps', tapData)
      .then(response => {
        return dispatch(addTap(response))
      })
  }
}

//POST BEER
const addBeer = (newBeer) => {
  return {
    type: 'ADD_BEER',
    newBeer
  }
}

export const postBeer = (newBeer, currentBeerId) => {
  return dispatch => {
    put('beers', currentBeerId, { on_tap: false })
    post('beers', newBeer)
      .then(response => {
        return dispatch(addBeer(response))
      })
  }
}



//PUT TAP
const editTap = (tapData) => {
  return {
    type: 'EDIT_TAP',
    tapData
  }
}

export const putTap = (id, body) => {
  return dispatch => {
    put('taps', id, body)
      .then(response => {
        console.log(response)
        return dispatch(editTap(response))
      })
  }
}

//DELETE TAP
export const removeTap = (tapId) => {
  return {
    type: 'DELETE_TAP',
    tapId
  }
}

export const deleteTap = (tapId) => {
  return dispatch => {
    del(`taps`, tapId)
      .then(response => {
        return dispatch(removeTap(tapId))
      })
  }
}
