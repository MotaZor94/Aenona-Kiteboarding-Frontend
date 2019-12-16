import React from "react"
import { Styled } from "./StyledText"

const NavBar = ({ children, as }) => {
  return <Styled.Text as={as}>{children}</Styled.Text>
}

export default NavBar
