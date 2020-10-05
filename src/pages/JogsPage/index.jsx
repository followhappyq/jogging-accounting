import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { fetchJogs, editJogsId } from "../../redux/actions/jogging"
import { ReactComponent as AddIcon } from "./assets/add.svg"
import JogsCard from "../../components/JogsCardComponent"
import JogsPopup from "../../containers/JogsPopupContainer"
import EditPopup from "../../containers/JogsEditContainer"
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
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)
  const jogs = useSelector(({ jogging }) => jogging.jogs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJogs())
    // eslint-disable-next-line
  }, [])

  const handlerPopup = () => {
    setIsPopupOpen((prevState) => !prevState)
  }

  const handlerEditPopup = (id) => {
    setIsEditPopupOpen((prevState) => !prevState)
    dispatch(editJogsId(id))
  }

  return (
    <div className="jogs">
      <div className="jogs__filter"></div>
      {!isPopupOpen && (
        <ul className="jogs__list">
          {jogs &&
            jogs.map((item, index) => {
              return (
                <JogsCard
                  date={formatDate(item.date)}
                  time={item.time}
                  distance={item.distance}
                  key={`${index}__${item.speed}`}
                  id={item.id}
                  handlerEditPopup={handlerEditPopup}
                />
              )
            })}
        </ul>
      )}
      {!isPopupOpen && <AddIcon className="jogs__add" onClick={handlerPopup} />}
      {isPopupOpen && <JogsPopup handlerPopup={handlerPopup} />}
      {isEditPopupOpen && <EditPopup handlerPopup={handlerEditPopup} jogs={jogs} />}
    </div>
  )
}

export default Jogs
