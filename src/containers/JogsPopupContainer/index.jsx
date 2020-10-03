import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { addJogs } from "../../redux/actions/login"
import JogsPopup from "../../components/JogsPopupComponent"

const JogsPopupContainer = ({ handlerPopup }) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(0)
  const [distance, setDistance] = useState(0)

  const dispatch = useDispatch()

  const onChangeDate = (date) => {
    setDate(date)
  }

  const onTimeChange = (e) => {
    if (e.target.value >= 0) {
      setTime(e.target.value)
    }
  }

  const onDistanceChange = (e) => {
    if (e.target.value >= 0) {
      setDistance(e.target.value)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      time: time,
      distance: distance,
      date: date.toString(),
    }
    dispatch(addJogs(data))
    handlerPopup()
  }

  return (
    <JogsPopup
      handlerPopup={handlerPopup}
      date={date}
      onChangeDate={onChangeDate}
      onTimeChange={onTimeChange}
      onDistanceChange={onDistanceChange}
      time={time}
      distance={distance}
      onSubmit={onSubmit}
    />
  )
}

export default JogsPopupContainer
