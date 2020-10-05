import axios from "axios"

import { types } from "./constant"

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
})

export const fetchJogs = () => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  })

  axios
    .get("https://jogtracker.herokuapp.com/api/v1/data/sync", {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
    })
    .then((res) => {
      dispatch(setJogs(res.data.response.jogs))
    })
    .catch((res) => {
      //err
    })
}

export const editJogs = (data) => {
  console.log(data)
  axios
    .put("https://jogtracker.herokuapp.com/api/v1/data/jog", data, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
    })
    .catch((res) => {})
  return {
    type: types.EDIT_JOGS,
    payload: data,
  }
}

export const setJogs = (jogs) => ({
  type: types.SET_JOGS,
  payload: jogs,
})

export const editJogsId = (id) => ({
  type: types.EDIT_JOGS,
  payload: id,
})
