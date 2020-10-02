import React from "react"
import { Link } from "react-router-dom"

import { ReactComponent as SadIcon } from "./assets/sad-rounded-square-emoticon.svg"

import "./style.scss"

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <SadIcon />
        <h3 className="not-found__title">Nothing is there</h3>
        <Link to="/" className="not-found__link">
          Create your jog first
        </Link>
      </div>
    </div>
  )
}

export default NotFound
