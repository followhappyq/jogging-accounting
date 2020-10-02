import React from "react"

import { ReactComponent as AddIcon } from "./assets/add.svg"
import JogsCard from "../../components/JogsCardComponent"
import "./style.scss"

function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = "0" + month
  if (day.length < 2) day = "0" + day

  return [day, month, year].join(".")
}

const Jogs = () => {
  const data = [{ date: formatDate(new Date()), speed: 16, time: 60, distance: 21 }]

  return (
    <div className="jogs">
      <div className="jogs__filter"></div>
      <ul className="jogs__list">
        {data.map((item, index) => (
          <JogsCard
            date={item.date}
            speed={item.speed}
            time={item.time}
            distance={item.distance}
            key={`${index}__${item.speed}`}
          />
        ))}
      </ul>
      <AddIcon className="jogs__add" />
    </div>
  )
}

export default Jogs
