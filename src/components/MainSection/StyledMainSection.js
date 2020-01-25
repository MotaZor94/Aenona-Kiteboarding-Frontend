import styled, { css } from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  ${({ backgroundImg, weather }) =>
    weather
      ? css`
          @media (min-width: 800px) {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            align-items: center;
          }
        `
      : css`
          @media (min-width: 800px) {
            padding: 4em;
            display: flex;
            justify-content: center;
            background-image: url(${backgroundImg});
            height: 100vh;
            background-size: cover;
            background-position: bottom;
          }
        `}
`
