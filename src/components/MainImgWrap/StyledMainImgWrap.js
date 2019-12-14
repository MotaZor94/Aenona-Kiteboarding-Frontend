import styled, { css } from 'styled-components'

export default styled.div`
  ${({ weather }) => weather
      ? css`
          @media (min-width: 800px) {
            width: 30%;
            height: 100px;
            margin: 10% 10% 10% 50%;
            max-width: 30%;
            max-height: 100%;
          }
        `
      : css`
          @media (min-width: 800px) {
            display: none;
          }
        `}

  border: 1px orange solid;
`
