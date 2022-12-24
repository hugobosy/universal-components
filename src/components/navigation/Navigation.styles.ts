import styled, { css } from "styled-components";
import { NavigationTypes } from "./Navigation.types";
import { Positions } from "../../helpers/styles/position";

export const Navigation = styled.ul<Partial<NavigationTypes>>`
  display: flex;
  ${({ position }) => position && Positions[position]}
  ${({ positionBlock }) => positionBlock && Positions[positionBlock]}
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
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
`;
