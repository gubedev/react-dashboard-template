import React from "react"
import PropTypes from "prop-types"

const Subheader = ({ title = "Subheader example" }) => <div className="subheader">{title}</div>

Subheader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Subheader
