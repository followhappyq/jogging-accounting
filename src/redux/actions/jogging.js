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

export const editJogs = (data, dataToRedux) => (dispatch) => {
  axios
    .put("https://jogtracker.herokuapp.com/api/v1/data/jog", data, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
    })
    .then(() => {
      dispatch(editJogsInStore(dataToRedux))
    })
    .catch((res) => {
      //err
    })
  return {
    type: types.EDIT_JOGS,
    payload: data,
  }
}

export const addJogs = (data) => (dispatch) => {
  axios
    .post("https://jogtracker.herokuapp.com/api/v1/data/jog", data, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
    })
    .then((res) => {
      const data = {
        id: res.data.response.id,
        time: res.data.response.time,
        distance: res.data.response.distance,
        userId: res.data.response.user_id,
        date: new Date(res.data.response.date).getTime(),
      }
      dispatch(addJogsToStore(data))
    })
    .catch((res) => {
      //err
    })
}

export const setJogs = (jogs) => ({
  type: types.SET_JOGS,
  payload: jogs,
})

export const addJogsToStore = (jogs) => ({
  type: types.ADD_JOGS,
  payload: jogs,
})

export const editJogsId = (id) => ({
  type: types.EDIT_JOGS_ID,
  payload: id,
})

export const editJogsInStore = (data) => ({
  type: types.EDIT_JOG_IN_STORE,
  payload: data,
})
