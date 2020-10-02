import React from "react"

import { ReactComponent as SigninLogo } from "./assets/bear-face.svg"
import "./style.scss"

const SignInComponent = () => {
  return (
    <div className="signin">
      <div className="signin__logo">
        <SigninLogo />
      </div>
      <button className="signin__button">Let me in</button>
    </div>
  )
}

export default SignInComponent
