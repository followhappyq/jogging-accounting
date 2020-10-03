import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { ReactComponent as LogoIcon } from "./assets/logo.svg"
import { ReactComponent as FilterIcon } from "./assets/filter-active.svg"
import "./style.scss"

const menu = [
  { link: "jogs", path: "/jogs" },
  { link: "info", path: "/info" },
  { link: "contact us", path: "/contact-us" },
]

const HeaderComponent = ({ isAuth, currentPage }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <LogoIcon />
      </div>
      {isAuth && (
        <ul className="header__menu menu">
          {menu.map((item, index) => (
            <li
              className={classNames("menu__item", { "menu__item--active": currentPage === item.path })}
              key={`${item.link}__${index}`}
            >
              <Link to={item.path}>{item.link}</Link>
            </li>
          ))}
          <li className="menu__item">
            <FilterIcon />
          </li>
        </ul>
      )}
    </header>
  )
}

export default HeaderComponent
