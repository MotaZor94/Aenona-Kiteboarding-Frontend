import styled, { css } from 'styled-components'

const Image = styled.img`
  /* padding: 1em; */
  overflow: hidden;
  ${({ width }) => css`
    width: ${width};
  `}
`

export const Styled = {
  Image,
}
