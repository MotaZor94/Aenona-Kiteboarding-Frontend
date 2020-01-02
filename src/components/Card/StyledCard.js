import styled, { css } from 'styled-components'

const StyledCard = styled.div`
  border-radius: 3px;
  box-shadow: 3px 3px 16px -8px rgba(0, 0, 0, 0.6);
  background-color: white;
  ${({ flexDirection }) =>
    flexDirection &&
    css`
      display: flex;
      flex-direction: ${flexDirection};
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ scroll }) =>
    scroll &&
    css`
      overflow-x: scroll;
    `}
`

export default StyledCard
