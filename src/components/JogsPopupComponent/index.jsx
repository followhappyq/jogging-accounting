import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { ReactComponent as CloseIcon } from "./assets/cancel.svg"
import "./style.scss"

const JogsPopup = ({ handlerPopup, date, onChangeDate, onDistanceChange, onTimeChange, time, distance, onSubmit }) => {
  return (
    <div className="wrapper">
      <div className="jogs-popup">
        <CloseIcon className="jogs-popup__close" onClick={handlerPopup} />
        <form className="jogs-popup__form" onSubmit={onSubmit}>
          <label className="jogs-popup__field">
            <span>Distance</span>
            <input
              type="number"
              name="distance"
              pattern="[0-9]"
              value={distance}
              onChange={onDistanceChange}
              min="0"
              step="0.01"
            />
          </label>
          <label className="jogs-popup__field">
            <span>Time</span>
            <input type="number" name="Time" pattern="[0-9]" value={time} onChange={onTimeChange} min="0" step="0.1" />
          </label>
          <div className="jogs-popup__field">
            <span>Date</span>
            <div>
              <DatePicker
                className="date-modal"
                dateFormat="dd.MM.yyyy"
                withPortal={false}
                selected={date}
                onChange={onChangeDate}
              />
            </div>
          </div>
          <input type="submit" className="jogs-popup__save" value="Save" />
        </form>
      </div>
    </div>
  )
}

export default JogsPopup
