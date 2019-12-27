import styled, { css } from 'styled-components'

export default styled.div`
  ${({ isRelative }) => isRelative && 'position: relative'}
  ${({ weather }) =>
    weather
      ? css`
          @media (min-width: 800px) {
            border: 1px red solid;
            width: 400px;
            height: 60vh;
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
