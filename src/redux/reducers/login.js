import { types } from "../actions/constant"

const initialState = {
  token: window.localStorage.token,
  isAuth: !!window.localStorage.token,
  userId: "",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_IS_AUTH":
      return {
        ...state,
        isAuth: payload,
      }
    case types.SET_TOKEN:
      return {
        ...state,
        token: payload,
      }
    case types.FETCH_USER_ID:
      return {
        ...state,
        userId: payload,
      }
    case types.SET_USER_ID:
      return {
        ...state,
        userId: payload,
      }
    default:
      return state
  }
}
