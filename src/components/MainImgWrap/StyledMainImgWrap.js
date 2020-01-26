import styled, { css } from 'styled-components'

export default styled.div`
  ${({ isRelative }) => isRelative && 'position: relative'}
  ${({ weather }) =>
    weather
      ? css`
          padding: 15px;
          padding-top: 30px;
          max-width: 500px;
          overflow: hidden;
          @media (min-width: 800px) {
            width: 400px;
          }
          @media (max-width: 800px) {
            margin: auto;
          }
        `
      : css`
          @media (min-width: 800px) {
            display: none;
          }
        `}

  position:relative;
`
