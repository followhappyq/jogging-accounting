import React from "react"
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { setIsFilterActive } from "../../redux/actions/filter"
import Header from "../../components/HeaderComponent"

const HeaderContainer = () => {
  const isAuth = useSelector(({ login }) => login.isAuth)
  const isFilterActive = useSelector(({ filter }) => filter.isFilterActive)
  const dispatch = useDispatch()
  const location = useLocation()

  const onClickFilter = () => {
    dispatch(setIsFilterActive(!isFilterActive))
  }

  return (
    <Header
      isAuth={isAuth}
      currentPage={location.pathname}
      onClickFilter={onClickFilter}
      isFilterActive={isFilterActive}
    />
  )
}

export default HeaderContainer
