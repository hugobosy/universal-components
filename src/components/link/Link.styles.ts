import styled, { css } from "styled-components";
import { LinkTypes } from "./Link.types";
import { Aligns } from "../../helpers/styles/align";
import { Transforms } from "../../helpers/styles/transform";
import { Decorations } from "../../helpers/styles/decoration";

export const Link = styled.a<Partial<LinkTypes>>`
  display: block;
  cursor: pointer;
  ${({ textAlign }) => textAlign && Aligns[textAlign]};
  ${({ transform }) => transform && Transforms[transform]};
  ${({ decoration }) => decoration && Decorations[decoration]};
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
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
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
