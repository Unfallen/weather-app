import types from './types'

function reducer(state, action) {
  switch (action.type) {
    case (types.FORECASTS):
      return {
        ...state,
        forecasts: action.payload
      }
    case(types.CITY):
      return {
        ...state,
        city: action.payload
      }

    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

export default reducer
