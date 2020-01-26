import styled, { css } from 'styled-components'

const Text = styled.div`
  font-size: 1.5em;
  color: #5c748e;
  ${({ centered }) => centered && 'text-align: center'}
  ${({ isAbsolute }) => isAbsolute && 'position: absolute'}
  ${({ as }) =>
    as === 'h1' &&
    css`
      color: #5c748e;
      font-weight: 800;
    `}
  ${({ as }) =>
    as === 'weather-data' &&
    css`
      font-size: 1em;
      font-weight: 800;
    `}
  ${({ as }) =>
    as === 'p' &&
    css`
      font-size: 1em;
    `}
    ${({ isWhite }) => isWhite && 'color:white;'}
    ${({ isBold }) => isBold && 'font-weight: 800;'}
    ${({ isPhone }) =>
      isPhone &&
      css`
        bottom: 30px;
        font-size: 1.8em;
        padding: 1em;
        max-width: 500px;
        @media (min-width: 800px) {
          display: none;
        }
      `}
      
`

export const Styled = {
  Text,
}
