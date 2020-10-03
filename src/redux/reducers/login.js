const initialState = {
  token: window.localStorage.token,
  isAuth: !!window.localStorage.token,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_IS_AUTH":
      return {
        ...state,
        isAuth: payload,
      }
    default:
      return state
  }
}
