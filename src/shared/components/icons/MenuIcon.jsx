import React from "react"
import PropTypes from "prop-types"

const MenuIcon = ({ svgClass }) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  </>
)

MenuIcon.propTypes = {
  svgClass: PropTypes.string.isRequired,
}
export default MenuIcon
