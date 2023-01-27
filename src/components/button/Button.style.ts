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
    background: linear-gradient(to bottom, #e83f3f 0%, #981d1d 100%);
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;

    &:hover {
      opacity: 0.9;
    }
  `,
  warning: css`
    background: linear-gradient(to bottom, #e8c13f 0%, #807115 100%);
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;

    &:hover {
      opacity: 0.9;
    }
  `,
  success: css`
    background: linear-gradient(to bottom, #2d8d0c 0%, #20590c 100%);
    padding: 10px 30px;
    border-radius: 8px;
    color: #fff;
    transition: 0.4s;

    &:hover {
      opacity: 0.9;
    }
  `,
};

export const Button = styled.button<Partial<ButtonTypes>>`
  position: relative;
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

  ${({ outline }) =>
    outline &&
    css`
      outline: ${outline};
    `};

  ${({ before }) =>
    before &&
    css`
      &::before {
        content: "";
        position: absolute;
        ${before}
      }
    `};
  ${({ after }) =>
    after &&
    css`
      &::before {
        content: "";
        position: absolute;
        ${after}
      }
    `}

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
