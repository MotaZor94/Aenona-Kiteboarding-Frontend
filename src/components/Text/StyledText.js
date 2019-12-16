import styled, { css } from "styled-components"

const Text = styled.div`
  font-size: 1.5em;
  color: #5c748e;

  ${({ as }) =>
    as === "h1" &&
    css`
      color: #5c748e;
      font-weight: 800;
    `}
  ${({ as }) =>
    as === "p" &&
    css`
      text-transform: capitalize;
    `}
`

export const Styled = {
  Text,
}
