import styled from "styled-components"

const StyledDesktopNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`

export default StyledDesktopNav
