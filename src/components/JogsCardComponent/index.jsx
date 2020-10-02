import React from "react"

import { ReactComponent as JogsIcon } from "./assets/icon.svg"
import "./style.scss"

const JogsCardComponent = ({ time, speed, distance, date }) => {
  return (
    <li className="card">
      <JogsIcon className="card__icon" />
      <div className="card__info">
        <div className="card__date">{date}</div>
        <div className="card__speed">
          Speed: <span className="card__item">{speed}</span>
        </div>
        <div className="card__distance">
          Distance: <span className="card__item">{distance} km</span>
        </div>
        <div className="card__time">
          Time: <span className="card__item">{time} min</span>
        </div>
      </div>
    </li>
  )
}

export default JogsCardComponent
