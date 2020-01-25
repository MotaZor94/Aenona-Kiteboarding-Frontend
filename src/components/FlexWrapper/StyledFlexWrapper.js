import styled, { css } from 'styled-components'

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  ${({ spaceevenly }) =>
    spaceevenly
      ? css`
          justify-content: space-evenly;
          width: 100%;
        `
      : css`
          justify-content: center;
        `}
`

export default StyledFlexWrapper
