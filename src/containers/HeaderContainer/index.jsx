import React from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

import Header from "../../components/HeaderComponent"

const HeaderContainer = () => {
  const isAuth = useSelector(({ login }) => login.isAuth)
  const location = useLocation()

  return <Header isAuth={isAuth} currentPage={location.pathname} />
}

export default HeaderContainer
