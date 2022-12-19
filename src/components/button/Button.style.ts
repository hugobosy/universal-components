import styled, { css } from "styled-components";
import { ButtonTypes } from "./Button.types";
import { displays } from "../../helpers/styles/display";
import { transforms } from "../../helpers/styles/transform";

export const Button = styled.button<Partial<ButtonTypes>>`
  cursor: pointer;
  ${({ display }) => display && displays[display]};
  ${({ transform }) => transform && transforms[transform]}

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
