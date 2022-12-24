import styled, { css } from "styled-components";
import { LinkTypes } from "./Link.types";
import { Aligns } from "../../helpers/styles/align";
import { Transforms } from "../../helpers/styles/transform";
import { Decorations } from "../../helpers/styles/decoration";
import { Positions } from "../../helpers/styles/position";

export const Link = styled.a<Partial<LinkTypes>>`
  display: block;
  cursor: pointer;
  ${({ textAlign }) => textAlign && Aligns[textAlign]};
  ${({ transform }) => transform && Transforms[transform]};
  ${({ decoration }) => decoration && Decorations[decoration]};
  ${({ position }) => position && Positions[position]};
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
          &::before {
            left: 0;
          }
        `};
        border: ${hover.border};
        text-shadow: ${hover.textShadow};
      }
    `};
  ${({ hover, color }) =>
    hover &&
    hover.isUnderline &&
    css`
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 1px;
        background-color: ${color};
        transition: 0.4s;
      }
    `}
`;
