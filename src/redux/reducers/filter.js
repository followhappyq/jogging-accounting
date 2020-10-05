import { types } from "../actions/constant"

const initialState = {
  filterFrom: new Date(1).getTime(),
  filterTo: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getTime(),
  isFilterActive: false,
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TO:
      return {
        ...state,
        filterTo: action.payload + 24 * 60 * 60 * 1000,
      }
    case types.FILTER_FROM:
      return {
        ...state,
        filterFrom: action.payload,
      }
    case types.FILTER_ACTIVE:
      return {
        ...state,
        isFilterActive: action.payload,
      }

    default:
      return state
  }
}

export default filter
