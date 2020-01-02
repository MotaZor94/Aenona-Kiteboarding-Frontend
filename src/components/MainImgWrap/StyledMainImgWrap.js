import styled, { css } from 'styled-components'

export default styled.div`
  ${({ isRelative }) => isRelative && 'position: relative'}
  ${({ weather }) =>
    weather
      ? css`
          overflow: hidden;
          @media (min-width: 800px) {
            width: 400px;
          }
        `
      : css`
          @media (min-width: 800px) {
            display: none;
          }
        `}

  position:relative;
`
// width: 40%;
