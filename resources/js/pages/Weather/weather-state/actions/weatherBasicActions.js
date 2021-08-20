import types from '../types'

async function setCity(dispatch, payload) {
  dispatch({ type: types.CITY, payload: payload})
}

export {setCity}