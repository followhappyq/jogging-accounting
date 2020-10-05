import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { setFilterFrom, setFilterTo } from "../../redux/actions/filter"
import Filter from "../../components/FilterComponent"

const FilterContainer = () => {
  const filterFrom = useSelector(({ filter }) => filter.filterFrom)
  const filterTo = useSelector(({ filter }) => filter.filterTo)

  const dispatch = useDispatch()

  const onChangeFilterFrom = (date) => {
    if (new Date(date).getTime() === 0) {
      dispatch(setFilterFrom(1))
    } else {
      dispatch(setFilterFrom(date))
    }
  }
  const onChangeFilterTo = (date) => {
    dispatch(setFilterTo(date))
  }

  return (
    <Filter
      filterTo={filterTo}
      filterFrom={filterFrom}
      onChangeFilterFrom={onChangeFilterFrom}
      onChangeFilterTo={onChangeFilterTo}
    />
  )
}

export default FilterContainer
