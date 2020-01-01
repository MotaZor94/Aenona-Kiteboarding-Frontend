import React from 'react'
import { Styled } from './StyledText'

const Text = ({
  children,
  as,
  color,
  isAbsolute = false,
  isWhite,
  isBold = false,
  isPhone = false,
  centered = false,
}) => {
  return (
    <Styled.Text
      isPhone={isPhone}
      isBold={isBold}
      isWhite={isWhite}
      isAbsolute={isAbsolute}
      color={color}
      as={as}
      centered={centered}
    >
      {children}
    </Styled.Text>
  )
}

export default Text
