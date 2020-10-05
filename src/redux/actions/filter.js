import { types } from "./constant"

export const setFilterFrom = (filterFrom) => ({
  type: types.FILTER_FROM,
  payload: new Date(filterFrom).getTime(),
})

export const setFilterTo = (filterTo) => ({
  type: types.FILTER_TO,
  payload: new Date(filterTo).getTime(),
})

export const setIsFilterActive = (bool) => ({
  type: types.FILTER_ACTIVE,
  payload: bool,
})
