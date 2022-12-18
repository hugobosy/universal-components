import styled, { css } from "styled-components";
import { NavigationTypes } from "./Navigation.types";

export const Navigation = styled.ul<Partial<NavigationTypes>>`
  display: flex;
  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
    `};
  list-style: none;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
`;
