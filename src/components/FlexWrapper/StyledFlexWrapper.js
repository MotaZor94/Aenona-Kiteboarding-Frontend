import styled, { css } from 'styled-components'

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  ${({ spaceevenly }) =>
    spaceevenly
      ? css`
          justify-content: space-evenly;
        `
      : css`
          justify-content: center;
        `}
`

export default StyledFlexWrapper
