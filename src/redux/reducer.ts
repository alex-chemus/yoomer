import initState from "./initState"
import IState from "@redux/IState"

interface IAction {
  type: string,
  payload?: any
}

const reducer = (state=initState, action: IAction): IState => {
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