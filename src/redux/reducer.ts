import initState from "./initState"
import { Action, State } from '../utils/types'

const reducer = (state=initState, action: Action): State => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.payload
      }

    case 'SET_FETCHING_TOKEN':
      return {
        ...state,
        isFetchingToken: action.payload
      }

    default:
      return state
  }
}

export default reducer