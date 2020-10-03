import React from "react"
import { NavLink } from "react-router-dom"

import { ReactComponent as SigninLogo } from "./assets/bear-face.svg"
import "./style.scss"

const SignInComponent = ({ onClickLogin }) => {
  return (
    <div className="signin">
      <div className="signin__logo">
        <SigninLogo />
      </div>
      <NavLink className="signin__button" onClick={onClickLogin} to="/jogs">
        Let me in
      </NavLink>
    </div>
  )
}

export default SignInComponent
