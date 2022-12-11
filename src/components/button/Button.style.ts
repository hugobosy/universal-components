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
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `};
  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `};
  ${({ fontColor }) =>
    fontColor &&
    css`
      color: ${fontColor};
    `};
  ${({ border }) =>
    border &&
    css`
      border: ${border};
    `};
  ${({ isUppercase }) =>
    isUppercase &&
    css`
      text-transform: uppercase;
    `};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};
`;
