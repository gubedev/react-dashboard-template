import React from "react"
import ReactDOM from "react-dom"
// Material UI
import { ThemeProvider } from "@material-ui/styles"
// Config
import theme from "config/theme"
// App
import { App } from "./App"
// Css
import "simplebar/dist/simplebar.min.css"
import "assets/scss/main.scss"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root"),
)
