import { combineReducers } from "redux"

import jogging from "./jogging"
import login from "./login"

const rootReducer = combineReducers({
  jogging,
  login,
})

export default rootReducer
