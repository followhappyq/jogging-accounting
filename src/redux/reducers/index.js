import { combineReducers } from "redux"

import jogging from "./jogging"
import login from "./login"
import filter from "./filter"

const rootReducer = combineReducers({
  jogging,
  login,
  filter,
})

export default rootReducer
