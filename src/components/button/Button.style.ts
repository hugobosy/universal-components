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
  cursor: pointer;
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

  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius};
    `};

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: ${shadow};
    `};

  ${({ transition }) =>
    transition &&
    css`
      transition: ${transition}s;
    `};

  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        background-color: ${hover.bgColor};
        color: ${hover.fontColor};
        padding: ${hover.padding};
        border-radius: ${hover.radius};
        box-shadow: ${hover.shadow};
      }
    `}
`;