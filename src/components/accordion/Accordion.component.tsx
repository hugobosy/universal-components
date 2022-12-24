import React from "react";
import { AccordionTypes } from "./Accordion.types";
import { AccordionItem, Content, Header } from "./Accordion.styles";

export const AccordionComponent: React.FC<AccordionTypes> = ({
  accordionItems,
}) => {
  return (
    <>
      {accordionItems.map((item) => (
        <AccordionItem key={item.header}>
          <Header>
            <p>{item.header}</p>
            <p>X</p>
          </Header>
          <Content>{item.content}</Content>
        </AccordionItem>
      ))}
    </>
  );
};
