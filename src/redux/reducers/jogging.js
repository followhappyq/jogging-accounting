import { types } from "../actions/constant"

const initialState = {
  jogs: [],
  id: "",
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

    case types.SET_JOGS:
      return {
        ...state,
        jogs: action.payload,
      }

    case types.EDIT_JOGS:
      return {
        ...state,
        id: action.payload,
      }

    default:
      return state
  }
}

export default jogging
