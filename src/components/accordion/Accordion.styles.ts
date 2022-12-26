import styled, { css } from "styled-components";
import { AccordionTypes } from "./Accordion.types";

export const AccordionItem = styled.div<Partial<AccordionTypes>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ customCss }) =>
    customCss &&
    css`
      ${customCss}
    `}
`;
export const Header = styled.div<Partial<AccordionTypes>>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ bgHeader }) =>
    bgHeader &&
    css`
      background-color: ${bgHeader};
    `}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize}rem;
    `}
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `}
  ${({ customHeader }) =>
    customHeader &&
    css`
      ${customHeader}
    `}
  p,
  span {
    cursor: pointer;
  }
`;
export const Content = styled.p<Partial<AccordionTypes>>`
  height: 0;
  opacity: 0;
  overflow-y: scroll;
  transition: all 400ms ease-in-out;
  ${({ padding }) =>
    padding &&
    css`
      padding: 0 ${padding};
    `}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: calc(${fontSize} * 0.6rem);
    `}
  ${({ customContent }) =>
    customContent &&
    css`
      ${customContent}
    `}
  &.active {
    ${({ heightContent }) =>
      heightContent &&
      css`
        height: ${heightContent};
      `};
    opacity: 1;
    ${({ padding }) =>
      padding &&
      css`
        padding: ${padding};
      `}
  }
`;
