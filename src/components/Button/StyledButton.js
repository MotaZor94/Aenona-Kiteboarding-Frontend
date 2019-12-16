import styled, { css } from "styled-components"

export default styled.button`
  color: white;
  margin: 0;
  padding: 0.25em 1em;
  font-family: Avenir;
  font-weight: 800;
  width: 100%;
  height: 36px;
  border-radius: 3px;

  &:active {
    opacity: 0.8;
  }
  ${({ iswhite }) =>
    iswhite
      ? css`
          background-color: none;
          border: 1px solid #5c748e;
          color: #5c748e;
        `
      : css`
          background-color: #5c748e;
          color: white;
        `}
`

// blue   #393EBE
// red    #FB3D3D
// green  #00A99D
// aenona #5C748E
