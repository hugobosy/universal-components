import styled, { css } from "styled-components";
import { SocialsTypes } from "./Socials.types";

export const Socials = styled.div<Partial<SocialsTypes>>`
  display: flex;
  align-items: center;
  column-gap: 10px;

  .icon {
    cursor: pointer;
    ${({ transition }) =>
      transition &&
      css`
        transition: ${transition}s;
      `};
    ${({ hover }) =>
      hover &&
      css`
        :hover {
          fill: ${hover.fill};
        }
      `}
  }

  @media (min-width: 768px) {
    column-gap: 25px;
  } ;
`;
