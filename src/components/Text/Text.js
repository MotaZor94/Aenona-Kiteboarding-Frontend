import React from "react"
import { Styled } from "./StyledText"

const Text = ({ children, as, color }) => {
  return (
    <Styled.Text color={color} as={as}>
      {children}
    </Styled.Text>
  )
}

export default Text
