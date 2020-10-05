import React from "react"
import DatePicker from "react-datepicker"

import "./style.scss"

const FilterComponent = ({ filterTo, filterFrom, onChangeFilterFrom, onChangeFilterTo }) => {
  return (
    <div className="jogs__filter filter">
      <div className="filter__container">
        <div className="filter__input">
          <span className="filter__description">Date from</span>

          <DatePicker
            className="filter__date"
            dateFormat="dd.MM.yyyy"
            selected={filterFrom}
            onChange={onChangeFilterFrom}
          />
        </div>
        <div className="filter__input">
          <span className="filter__description">Date to</span>
          <DatePicker
            className="filter__date"
            dateFormat="dd.MM.yyyy"
            selected={filterTo}
            onChange={onChangeFilterTo}
          />
        </div>
      </div>
    </div>
  )
}

export default FilterComponent
