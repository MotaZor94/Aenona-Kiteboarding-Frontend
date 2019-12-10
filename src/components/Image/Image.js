import React from "react"
import { Styled } from "./StyledImage"

const Image = ({ src, width }) => {
  return <Styled.Image src={src} width={width} />
}

export default Image
