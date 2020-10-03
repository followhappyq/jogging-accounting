import { types } from "../actions/constant"

const initialState = {
  items: [],
  jogs: [],
}

const jogging = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        items: action.payload,
      }

    case types.ADD_JOGS:
      return {
        ...state,
        jogs: [...state.jogs, action.payload],
      }

    default:
      return state
  }
}

export default jogging
