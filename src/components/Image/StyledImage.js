import styled, { css } from "styled-components"
const Image = styled.img`
  height: 100%;
  padding: 1em;
  ${({ width }) => css`
    width: ${width};
  `}
`

export const Styled = {
  Image,
}
