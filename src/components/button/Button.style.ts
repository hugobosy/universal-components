import styled, { css } from "styled-components";
import { ButtonTypes } from "./Button.types";
import { Displays } from "../../helpers/styles/display";
import { Transforms } from "../../helpers/styles/transform";

const typeBtns = {
  primary: css`
    background: linear-gradient(to bottom, #2f8bf8 0%, #0e4688 100%);
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.3s;

    &:hover {
      opacity: 0.9;
    }
  `,
  danger: css`
    background-color: #e83f3f;
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;

    &:hover {
      background-color: rgba(232, 63, 63, 0.75);
    }
  `,
  warning: css`
    background-color: #e8c13f;
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;

    &:hover {
      background-color: rgba(232, 193, 63, 0.75);
    }
  `,
  success: css`
    background-color: #2d8d0c;
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;

    &:hover {
      background-color: rgba(45, 141, 12, 0.75);
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
