import React, { useState } from "react"
import { useSelector } from "react-redux"

import { ReactComponent as AddIcon } from "./assets/add.svg"
import JogsCard from "../../components/JogsCardComponent"
import JogsPopup from "../../containers/JogsPopupContainer"
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
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const jogs = useSelector(({ jogging }) => jogging.jogs)

  console.log(jogs)

  const handlerPopup = () => {
    setIsPopupOpen((prevState) => !prevState)
  }

  return (
    <div className="jogs">
      <div className="jogs__filter"></div>
      <ul className="jogs__list">
        {jogs.map((item, index) => (
          <JogsCard
            date={formatDate(item.date)}
            time={item.time}
            distance={item.distance}
            key={`${index}__${item.speed}`}
          />
        ))}
      </ul>
      <AddIcon className="jogs__add" onClick={handlerPopup} />
      {isPopupOpen && <JogsPopup handlerPopup={handlerPopup} />}
    </div>
  )
}

export default Jogs
