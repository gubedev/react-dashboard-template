import React from "react"
// import { Link } from "react-router-dom"
import config from "config"

const Brand = () => (
  <>
    <div className="brand">
      {/* <Link to="/">{config.appName}</Link> */}
      <span>{config.appName}</span>
    </div>
    <div className="app-version">{config.appVersion}</div>
  </>
)

export default Brand
