import React, { createContext, useReducer, useContext } from 'react'

import initialState from './initialState'
import reducer from './reducer'
import actions from './actions'

const StateContext = createContext()
const DispatchContext = createContext()

function WeatherStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useWeatherStateOnly() {
  const context = useContext(StateContext)
  if (context === undefined) {
    throw new Error('useEmailState must be used within a EmailStateProvider')
  }

  return context
}

function useWeatherActions() {
  const dispatch = useContext(DispatchContext)
  if (dispatch === undefined) {
    throw new Error('useEmailState must be used within a EmailStateProvider')
  }

  // Construct actions object with each function as dispatch call
  // provided with action type from the name of the action function
  let actionsDispatch = {}
  Object.keys(actions).forEach(actionKey => {
    actionsDispatch[actionKey] = payload => actions[actionKey](dispatch, payload)
  })

  return actionsDispatch
}

function useWeatherState() {
  return [useWeatherStateOnly(), useWeatherActions()]
}


export {
  WeatherStateProvider,
  useWeatherStateOnly,
  useWeatherActions,
  useWeatherState
}
