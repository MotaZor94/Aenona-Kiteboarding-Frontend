import styled, { css } from 'styled-components'

export default styled.div`
  ${({ isRelative }) => isRelative && 'position: relative'}
  ${({ weather }) =>
    weather
      ? css`
          padding: 15px;
          padding-top: 30px;
          max-width: 500px;
          margin: auto;
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
