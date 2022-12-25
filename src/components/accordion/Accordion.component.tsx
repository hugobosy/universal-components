import React, { useState } from "react";
import { AccordionTypes } from "./Accordion.types";
import { AccordionItem, Content, Header } from "./Accordion.styles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const AccordionComponent: React.FC<AccordionTypes> = ({
  accordionItems,
  maxWidth,
  heightContent,
  bgHeader,
  margin,
  padding,
  fontWeight,
  fontFamily,
  fontSize,
  color,
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
        <AccordionItem key={index} maxWidth={maxWidth} margin={margin}>
          <Header
            onClick={() => toggle(index)}
            bgHeader={bgHeader}
            padding={padding}
          >
            <p>{item.header}</p>
            <span>{show === index ? <FaChevronUp /> : <FaChevronDown />}</span>
          </Header>
          <Content
            className={show === index ? "active" : ""}
            heightContent={heightContent}
            padding={padding}
          >
            {item.content}
          </Content>
        </AccordionItem>
      ))}
    </>
  );
};
