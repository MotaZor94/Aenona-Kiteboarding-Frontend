import styled, { css } from 'styled-components'
import { theme } from '../../../theme'

const WhiteBox = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: white;
  /* box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.25); */
  z-index: 20;
  height: 3.6em;
  ${({ top }) => top
      ? css`
          top: 0;
          border-bottom: 0.5px solid ${theme.colors.palette.blue.normal};
        `
      : css`
          bottom: 0;
          border-top: 0.5px solid ${theme.colors.palette.blue.normal};
        `}
`

export default WhiteBox
