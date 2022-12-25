import React, { useState } from "react";
import { AccordionTypes } from "./Accordion.types";
import { AccordionItem, Content, Header } from "./Accordion.styles";

export const AccordionComponent: React.FC<AccordionTypes> = ({
  accordionItems,
}) => {
  const [show, setShow] = useState<boolean | null | number>(false);

  const toggle = (index: number) => {
    if (show === index) {
      return setShow(null);
    }
    setShow(index);
  };
  return (
    <>
      {accordionItems.map((item, index) => (
        <AccordionItem key={index}>
          <Header onClick={() => toggle(index)}>
            <p>{item.header}</p>
            <span>X</span>
          </Header>
          <Content className={show === index ? "active" : ""}>
            {item.content}
          </Content>
        </AccordionItem>
      ))}
    </>
  );
};
