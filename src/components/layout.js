/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import NavBar from "./Nav/Nav"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
