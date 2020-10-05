import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { setIsFilterActive } from "../../redux/actions/filter"
import Header from "../../components/HeaderComponent"

const HeaderContainer = () => {
  const isAuth = useSelector(({ login }) => login.isAuth)
  const isFilterActive = useSelector(({ filter }) => filter.isFilterActive)
  const dispatch = useDispatch()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const onClickFilter = () => {
    dispatch(setIsFilterActive(!isFilterActive))
  }

  const onMobileMenuOpen = () => {
    setIsMobileMenuOpen((prevState) => !prevState)
    console.log(1)
  }

  return (
    <Header
      isAuth={isAuth}
      currentPage={location.pathname}
      onClickFilter={onClickFilter}
      isFilterActive={isFilterActive}
      isMobileMenuOpen={isMobileMenuOpen}
      onMobileMenuOpen={onMobileMenuOpen}
    />
  )
}

export default HeaderContainer
