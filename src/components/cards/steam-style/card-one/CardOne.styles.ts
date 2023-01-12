import styled, { css } from "styled-components";
import { CardOneTypes } from "./CardOne.types";

export const Card = styled.div<Partial<CardOneTypes>>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    transition: all 600ms ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    > div {
      bottom: 0;
    }
    &::before {
      bottom: 0;
    }
  }
`;
export const CardInfo = styled.div<Partial<CardOneTypes>>`
  position: absolute;
  bottom: -35%;
  left: 0;
  width: 100%;
  height: 35%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: all 600ms ease-in-out;
  backdrop-filter: blur(10px);
`;
