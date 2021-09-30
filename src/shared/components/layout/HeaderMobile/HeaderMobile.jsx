/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react"
// Components
import { Brand } from "shared"
import { MenuIcon } from "shared/components"
// Utils
import { OFFCANVAS_CLASS, doToggle } from "../AsideLeft/utils"

const HeaderMobile = () => {
  const handleToggleClick = () => {
    doToggle(OFFCANVAS_CLASS)
  }

  return (
    <div className="header-mobile">
      <div className="container">
        <div className="header-mobile__brand">
          <Brand />
        </div>
        <div className="header-mobile__toggle" onClick={() => handleToggleClick()}>
          <MenuIcon svgClass="svg-icon" />
        </div>
      </div>
    </div>
  )
}

export default HeaderMobile
