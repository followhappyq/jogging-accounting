import axios from "axios"

import { types } from "./constant"

export const fetchToken = () => (dispatch) => {
  axios
    .post(`https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin`, { uuid: "hello" })
    .then((response) => {
      window.localStorage["token"] = response.data.response.access_token
      dispatch(setIsAuth(true))
    })
    .catch((response) => {
      //error
      dispatch(setIsAuth(false))
    })

  return {
    type: types.FETCH_TOKEN,
  }
}

export const addJogs = (data) => {
  axios
    .post("https://jogtracker.herokuapp.com/api/v1/data/jog", data, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
    })
    .catch((res) => {
      //err
    })
  return {
    type: types.ADD_JOGS,
    payload: data,
  }
}

export const setIsAuth = (bool) => ({
  type: types.USER_IS_AUTH,
  payload: bool,
})
