import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"

import { ReactComponent as CloseIcon } from "./assets/cancel.svg"
import { ReactComponent as LogoIcon } from "./assets/logo.svg"

import "./style.scss"

const MobileMenu = ({ menu, currentPage, onMobileMenuOpen }) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__icons">
        <LogoIcon className="mobile-menu__logo" />
        <CloseIcon className="mobile-menu__close" onClick={onMobileMenuOpen} />
      </div>
      <ul className="mobile-menu__list">
        {menu.map((item, index) => (
          <li
            key={`${item.link}__${index}`}
            className={classNames("mobile-menu__item", { "mobile-menu__item--active": currentPage === item.path })}
          >
            <Link to={item.path} onClick={onMobileMenuOpen}>
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu
