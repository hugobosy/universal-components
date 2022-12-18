import styled, { css } from "styled-components";
import { NavigationTypes } from "./Navigation.types";

const positions = {
  relative: css`
    position: relative;
  `,
  absolute: css`
    position: absolute;
  `,
  fixed: css`
    position: fixed;
  `,
};
export const Navigation = styled.ul<Partial<NavigationTypes>>`
  display: flex;
  ${({ position }) => position && positions[position]}
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
