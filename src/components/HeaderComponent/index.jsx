import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import menuSrc from "./assets/menu.png"
import { ReactComponent as LogoIcon } from "./assets/logo.svg"
import { ReactComponent as FilterActiveIcon } from "./assets/filter-active.svg"
import { ReactComponent as FilterIcon } from "./assets/filter.svg"
import MobileMenu from "../MobileMenu"
import "./style.scss"

const menu = [
  { link: "jogs", path: "/jogs" },
  { link: "info", path: "/info" },
  { link: "contact us", path: "/contact-us" },
]

const HeaderComponent = ({
  isAuth,
  currentPage,
  isFilterActive,
  onClickFilter,
  isMobileMenuOpen,
  onMobileMenuOpen,
}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <LogoIcon />
      </div>
      {isAuth && (
        <ul className="header__menu menu">
          {menu.map((item, index) => (
            <li
              className={classNames("menu__item", "menu__item--desktop", {
                "menu__item--active": currentPage === item.path,
              })}
              key={`${item.link}__${index}`}
            >
              <Link to={item.path}>{item.link}</Link>
            </li>
          ))}
          <li className="menu__item menu__item--filter" onClick={onClickFilter}>
            {isFilterActive ? <FilterActiveIcon /> : <FilterIcon />}
          </li>
          <li className="menu__item--mobile" onClick={onMobileMenuOpen}>
            <img src={menuSrc} alt="menu" />
          </li>
          {isMobileMenuOpen && (
            <li className="menu__item--mobile">
              <MobileMenu menu={menu} currentPage={currentPage} onMobileMenuOpen={onMobileMenuOpen} />
            </li>
          )}
        </ul>
      )}
    </header>
  )
}

export default HeaderComponent
