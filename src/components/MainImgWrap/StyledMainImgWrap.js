import styled, { css } from 'styled-components'

export default styled.div`
  ${({ weather }) => weather
      ? css`
          @media (min-width: 800px) {
            width: 40%;
            height: 100px;
          }
        `
      : css`
          @media (min-width: 800px) {
            display: none;
          }
        `}

  border: 1px orange solid;
`
