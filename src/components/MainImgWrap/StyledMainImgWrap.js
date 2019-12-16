import styled, { css } from "styled-components"

export default styled.div`
  ${({ weather }) =>
    weather
      ? css`
          @media (min-width: 800px) {
            width: 300px;
            height: 60vh;
          }
        `
      : css`
          @media (min-width: 800px) {
            display: none;
          }
        `}

  position:relative;
  border: 1px orange solid;
`
// width: 40%;
