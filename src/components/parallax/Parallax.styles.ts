import styled, { css } from "styled-components";
import { ParallaxTypes } from "./Parallax.types";

export const Parallax = styled.div<Partial<ParallaxTypes>>`
  position: relative;
  ${({ image }) =>
    image &&
    css`
      background-attachment: fixed;
      background-image: url(${image});
      background-repeat: no-repeat;
      background-size: cover;
    `};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
  ${({ isOverlay }) =>
    isOverlay &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${isOverlay.bgColor};
        opacity: ${isOverlay.opacity};
      }
    `}
`;
