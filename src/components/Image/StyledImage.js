import styled, { css } from 'styled-components'

const Image = styled.img`
  overflow: hidden;
  ${({ width }) => css`
    width: ${width};
  `}
`

export const Styled = {
  Image,
}
