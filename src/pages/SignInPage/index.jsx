import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { fetchToken } from "../../redux/actions/login"
import SignIn from "../../components/SignInComponent"
import "./style.scss"

const SignInPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isAuth = useSelector(({ login }) => login.isAuth)

  useEffect(() => {
    if (isAuth === true) {
      history.push("/jogs")
    }
  }, [isAuth, history])

  const onClickLogin = () => {
    dispatch(fetchToken())
  }

  return (
    <div className="signin-container">
      <SignIn onClickLogin={onClickLogin} />
    </div>
  )
}

export default SignInPage
