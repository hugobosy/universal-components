import styled from "styled-components";

export const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
`;
export const Header = styled.h5`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: #321231;
  color: #fff;
`;
export const Content = styled.p`
  height: 0;
  opacity: 0;
`;
