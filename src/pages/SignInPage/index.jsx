import React from "react"
import { useDispatch } from "react-redux"

import { fetchToken } from "../../redux/actions/login"
import SignIn from "../../components/SignInComponent"
import "./style.scss"

const SignInPage = () => {
  const dispatch = useDispatch()

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
