import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { fetchUserInfo } from "../../redux/actions/login"
import { fetchJogs, editJogsId } from "../../redux/actions/jogging"
import { ReactComponent as AddIcon } from "./assets/add.svg"
import JogsCard from "../../components/JogsCardComponent"
import Filter from "../../containers/FilterContainer"
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
  const jogs = useSelector(({ jogging }) => jogging.jogs)
  const filterFrom = useSelector(({ filter }) => filter.filterFrom)
  const filterTo = useSelector(({ filter }) => filter.filterTo)
  const isFilterActive = useSelector(({ filter }) => filter.isFilterActive)

  const [filterJogs, setFilterJogs] = useState([])
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJogs())
    dispatch(fetchUserInfo())
  }, [dispatch])

  const handlerPopup = () => {
    setIsPopupOpen((prevState) => !prevState)
  }

  const handlerEditPopup = (id) => {
    setIsEditPopupOpen((prevState) => !prevState)
    dispatch(editJogsId(id))
  }

  useEffect(() => {
    setFilterJogs(jogs)
  }, [jogs])

  useEffect(() => {
    setFilterJogs((jogs) => jogs.filter((item) => item.date > filterFrom && item.date < filterTo))
  }, [filterTo, filterFrom, jogs])

  return (
    <div className="jogs">
      {isFilterActive && <Filter />}
      {!isPopupOpen && !isEditPopupOpen && (
        <ul className="jogs__list">
          {filterJogs.map((item, index) => {
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
