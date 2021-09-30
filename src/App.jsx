import React, { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
// Material UI
import CssBaseline from "@material-ui/core/CssBaseline"
// Components
import {
  AsideLeft, Header, HeaderMobile, Footer, Subheader,
} from "shared"

export const App = () => (
  <>
    <BrowserRouter>
      <CssBaseline />
      <div className="wrapper aside-left--expanded">
        <AsideLeft />
        <div className="pages-wrapper">
          <Header onLogout={() => {}} />
          <HeaderMobile />
          <Suspense fallback={<div>Loading...</div>}>
            <div className="pages-content">
              <Subheader title="Subheader example" />
            </div>
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </>
)

export default App
