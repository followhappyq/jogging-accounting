import axios from "axios"

import { types } from "./constant"

export const addJogs = (data) => {
  axios
    .post("https://jogtracker.herokuapp.com/api/v1/data/jog", data, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
    })
    .then((res) => {
      return {
        type: types.ADD_JOGS,
        payload: data,
      }
    })
    .catch((res) => {
      //err
    })
}
