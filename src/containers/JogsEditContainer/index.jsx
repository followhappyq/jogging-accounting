import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import { editJogs } from "../../redux/actions/jogging"
import JogsPopupComponent from "../../components/JogsPopupComponent"

const JogsEditContainer = ({ handlerPopup, jogs }) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(0)
  const [distance, setDistance] = useState(0)

  const jogsId = useSelector(({ jogging }) => jogging.id)
  const userId = useSelector(({ login }) => login.userId)
  const dispatch = useDispatch()

  const onChangeDate = (date) => {
    setDate(date)
  }

  const onJogsIdChange = useCallback(() => {
    const currentJog = jogs.filter((item) => item.id === jogsId)
    setTime(currentJog[0].time)
    setDistance(currentJog[0].distance)
    setDate(new Date(currentJog[0].date).getTime())
  }, [jogs, jogsId])

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
      jog_id: jogsId,
      time: time,
      distance: distance,
      date: new Date(date),
      user_id: userId,
    }

    const dataToRedux = {
      id: jogsId,
      time: time,
      distance: distance,
      date: new Date(date),
      user_id: userId,
    }

    dispatch(editJogs(data, dataToRedux))
    handlerPopup()
  }

  useEffect(() => {
    onJogsIdChange()
  }, [jogsId, onJogsIdChange])

  return (
    <JogsPopupComponent
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

export default JogsEditContainer
