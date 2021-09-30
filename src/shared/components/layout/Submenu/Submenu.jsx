import React from "react"
import PropTypes from "prop-types"
// Components
import { AngleRightIcon, AngleUpIcon } from "shared/components/icons"
// Material UI
import { Box } from "@material-ui/core"

const Submenu = ({ children, icon, name }) => {
  const [collapsed, setCollapsed] = React.useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const ulChildren = React.Children.map(children, (child) => <>{child}</>)

  return (
    <li className="menu__item">
      <div className="menu__link">
        <Box display="flex" alignItems="center">
          {icon}
          <Box ml={1} className="menu__link__span">
            {name}
          </Box>
        </Box>
        {collapsed === true ? (
          <Box onClick={() => toggleCollapsed()}>
            <AngleUpIcon svgClass="svg-icon-16 arrow-collapse" />
          </Box>
        ) : (
          <Box onClick={() => toggleCollapsed()}>
            <AngleRightIcon svgClass="svg-icon-16 arrow-collapse" />
          </Box>
        )}
      </div>
      <ul
        className="menu__nav"
        style={{ display: collapsed ? "block" : "none" }}
      >
        {ulChildren}
      </ul>
    </li>
  )
}

Submenu.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default Submenu
