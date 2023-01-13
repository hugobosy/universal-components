import styled, { css } from "styled-components";
import { ButtonTypes } from "./Button.types";
import { Displays } from "../../helpers/styles/display";
import { Transforms } from "../../helpers/styles/transform";

const typeBtns = {
  primary: css`
    background-color: #2f8bf8;
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.3s;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);

    &:hover {
      background-color: rgba(47, 139, 248, 0.75);
    }
    &:active {
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
    }
  `,
  danger: css`
    background-color: #e83f3f;
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);

    &:hover {
      background-color: rgba(232, 63, 63, 0.75);
    }
    &:active {
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
    }
  `,
};

export const Button = styled.button<Partial<ButtonTypes>>`
  cursor: pointer;
  ${({ display }) => display && Displays[display]};
  ${({ transform }) => transform && Transforms[transform]};
  ${({ typeBtn }) => typeBtn && typeBtns[typeBtn]};

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
