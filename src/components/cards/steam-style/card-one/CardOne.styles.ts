import styled from "styled-components";

export const Card = styled.div`
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
  }
`;
export const CardInfo = styled.div`
  width: 100%;
  height: 150px;
  background-image: url("https://s1.gaming-cdn.com/images/products/1893/orig/dirt-4-pc-mac-spiel-steam-cover.jpg?v=1650458746");
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  z-index: 1;
  transition: all 600ms ease-in-out;
`;
export const CardLayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(150, 150, 150, 0.8);
  backdrop-filter: blur(15px);
`;
export const Description = styled.div``;
