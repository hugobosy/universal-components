import styled, { css } from "styled-components";
import { LinkTypes } from "./Link.types";
import { text } from "stream/consumers";

const Aligns = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
};

export const Link = styled.a<Partial<LinkTypes>>`
  display: block;
  cursor: pointer;
  ${({ textAlign }) => textAlign && Aligns[textAlign]};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
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
  ${({ isUppercase }) =>
    isUppercase &&
    css`
      text-transform: uppercase;
    `};
  ${({ isUnderline }) =>
    isUnderline &&
    css`
      text-decoration: underline;
    `};
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `};
  ${({ isItalic }) =>
    isItalic &&
    css`
      font-style: italic;
    `};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `};
  ${({ border }) =>
    border &&
    css`
      border: ${border};
    `};
  ${({ transition }) =>
    transition &&
    css`
      transition: ${transition}s;
    `};
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius};
    `};
  ${({ textShadow }) =>
    textShadow &&
    css`
      text-shadow: ${textShadow};
    `};
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        background-color: ${hover.bgColor};
        font-weight: ${hover.fontWeight};
        border-radius: ${hover.radius};
        ${hover.isUnderline &&
        css`
          text-decoration: underline;
        `};
        border: ${hover.border};
        text-shadow: ${hover.textShadow};
      }
    `};
`;
