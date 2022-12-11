import styled, { css } from "styled-components";
import { ButtonTypes } from "./Button.types";

const displays = {
  block: css`
    display: block;
  `,
  flex: css`
    display: flex;
  `,
  grid: css`
    display: grid;
  `,
  none: css`
    display: none;
  `,
};
export const Button = styled.button<Partial<ButtonTypes>>`
  ${({ display }) => display && displays[display]};
`;