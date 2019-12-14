import styled, { css } from 'styled-components'

export default styled.div`
  border: 1px green solid;
  display: flex;
  flex-direction: column;
  ${({ backgroundImg, weather }) => weather
      ? css``
      : css`
          @media (min-width: 800px) {
            background-image: url(${backgroundImg});
          }
        `}
`
