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
        console.log(allData)
        return dispatch(receiveAll(allData))
    })
  }
}


//POST TAP
const addTap = (tapData) => {
  return {
    type: 'ADD_TAP',
    tapData
  }
}

export const postTap = (name) => {
  return dispatch => {
    post('taps', name)
      .then(response => {
        return dispatch(addTap(response))
      })
  }
}

//POST BEER
const addBeer = (currentId, newBeer) => {
  return {
    type: 'ADD_BEER',
    currentId,
    newBeer
  }
}

export const postBeer = (currentId, newBeer) => {
  return dispatch => {
    post('beers', newBeer)
      .then(response => {
        return dispatch(addBeer(currentId, response))
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
    put(`taps/${id}`, body)
      .then(response => {
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

export const deleteTap = (id) => {
  return dispatch => {
    del(`taps/${id}`)
      .then(response => {
        return dispatch(removeTap(response))
      })
  }
}
