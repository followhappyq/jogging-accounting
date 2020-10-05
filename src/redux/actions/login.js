import axios from "axios"

import { types } from "./constant"

export const fetchToken = () => (dispatch) => {
  axios
    .post(`https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin`, { uuid: "hello" })
    .then((response) => {
      window.localStorage["token"] = response.data.response.access_token

      dispatch(setIsAuth(true))
      dispatch(setToken(response.data.response.access_token))
    })
    .catch((response) => {
      //error
      dispatch(setIsAuth(false))
    })

  return {
    type: types.FETCH_TOKEN,
  }
}

export const fetchUserInfo = () => (dispatch) => {
  axios
    .get(`https://jogtracker.herokuapp.com/api/v1/auth/user`, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
    })
    .then((response) => {
      dispatch(setUserId(response.data.response.id))
    })
    .catch((res) => {
      //error
    })

  return {
    type: types.FETCH_USER_ID,
  }
}



export const setIsAuth = (bool) => ({
  type: types.USER_IS_AUTH,
  payload: bool,
})

export const setToken = (token) => ({
  type: types.SET_TOKEN,
  payload: token,
})

export const setUserId = (id) => ({
  type: types.SET_USER_ID,
  payload: id,
})
