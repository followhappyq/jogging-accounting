import React from "react"

import { ReactComponent as LogoIcon } from "./assets/logo.svg"
import { ReactComponent as FilterIcon } from "./assets/filter-active.svg"
import "./style.scss"

const menu = ["jogs", "info", "contact us", <FilterIcon />]

const HeaderComponent = ({ isAuth }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <LogoIcon />
      </div>
      {isAuth && (
        <ul className="header__menu menu">
          {menu.map((item, index) => (
            <li className="menu__item" key={`${item}__${index}`}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default HeaderComponent
