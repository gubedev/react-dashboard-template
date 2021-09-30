/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react"
import { Link } from "react-router-dom"
// Material UI
import { Box } from "@material-ui/core"
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined"
import DomainOutlinedIcon from "@material-ui/icons/DomainOutlined"
import LocalShippingIcon from "@material-ui/icons/LocalShipping"
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined"
// Components
import { AngleDoubleLeftIcon, AngleDoubleRightIcon } from "shared/components"
import { Brand } from "shared"
import SimpleBar from "simplebar-react"
// Utils
import {
  EXPANDED_CLASS, closeOffcanvas, doToggle, isExpanded,
} from "./utils"
import Submenu from "../Submenu"

const AsideLeft = () => {
  const [isPinned, setIsPinned] = React.useState(false)
  const wrapperRef = React.useRef(null)

  const handleClickOutside = (event) => {
    if (event.clientY > 35 && event.clientX > 260) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeOffcanvas()
      }
    }
  }

  const handleToggleClick = () => {
    doToggle(EXPANDED_CLASS)
    setIsPinned(!isExpanded())
  }

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, false)
    setIsPinned(!isExpanded())
    return () => {
      document.removeEventListener("click", handleClickOutside, false)
    }
  }, [])

  return (
    <>
      <div className="aside-left" ref={wrapperRef}>
        <div className="aside-left__wrapper">
          <div className="aside-left__header">
            <div className="aside-left__brand">
              <Brand />
            </div>
            <div className="aside-left__toggle" onClick={() => handleToggleClick()}>
              {isPinned ? <AngleDoubleRightIcon svgClass="svg-icon-16" /> : <AngleDoubleLeftIcon svgClass="svg-icon-16" />}
            </div>
          </div>
          <SimpleBar className="aside-left__simplebar">
            <div className="aside-left__menu">
              <ul className="menu__nav">
                <li className="menu__section">
                  <h4 className="menu__section-text">MAIN</h4>
                </li>
                <li className="menu__item">
                  <div className="menu__link">
                    <Box display="flex" alignItems="center">
                      <DashboardOutlinedIcon className="svg-icon-18" />
                      <Link to="/">
                        <Box ml={1} className="menu__link__span">
                          Dashboard
                        </Box>
                      </Link>
                    </Box>
                  </div>
                </li>
                <li className="menu__section">
                  <h4 className="menu__section-text">MODULES</h4>
                </li>
                <Submenu icon={<DomainOutlinedIcon className="svg-icon-18" />} name="Producción">
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} mt={1} className="menu__link__span">
                          Telemails
                        </Box>
                      </Link>
                    </div>
                  </li>
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} className="menu__link__span">
                          Crear secuencia
                        </Box>
                      </Link>
                    </div>
                  </li>
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} className="menu__link__span">
                          Registros
                        </Box>
                      </Link>
                    </div>
                  </li>
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} className="menu__link__span">
                          Imprimir kanban
                        </Box>
                      </Link>
                    </div>
                  </li>
                </Submenu>
                <Submenu icon={<LocalShippingIcon className="svg-icon-18" />} name="Despacho">
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} mt={1} className="menu__link__span">
                          Remitos
                        </Box>
                      </Link>
                    </div>
                  </li>
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} className="menu__link__span">
                          Crear remito
                        </Box>
                      </Link>
                    </div>
                  </li>
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} className="menu__link__span">
                          Validación
                        </Box>
                      </Link>
                    </div>
                  </li>
                </Submenu>
                <Submenu icon={<SettingsOutlinedIcon className="svg-icon-18" />} name="Sistema">
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} mt={1} className="menu__link__span">
                          Usuarios
                        </Box>
                      </Link>
                    </div>
                  </li>
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} className="menu__link__span">
                          Catálogo
                        </Box>
                      </Link>
                    </div>
                  </li>
                  <li className="menu__item">
                    <div className="menu__link">
                      <Link to="/">
                        <Box ml={3} className="menu__link__span">
                          Configuración
                        </Box>
                      </Link>
                    </div>
                  </li>
                </Submenu>
              </ul>
            </div>
          </SimpleBar>
        </div>
      </div>
      <div className="aside-left-overlay" />
    </>
  )
}

export default AsideLeft
