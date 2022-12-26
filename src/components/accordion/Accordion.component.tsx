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
  customCss,
  customHeader,
  customContent,
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
        <AccordionItem
          key={index}
          maxWidth={maxWidth}
          margin={margin}
          fontFamily={fontFamily}
          color={color}
          customCss={customCss}
        >
          <Header
            onClick={() => toggle(index)}
            bgHeader={bgHeader}
            padding={padding}
            fontWeight={fontWeight}
            fontSize={fontSize}
            customHeader={customHeader}
          >
            <p>{item.header}</p>
            <span>{show === index ? <FaChevronUp /> : <FaChevronDown />}</span>
          </Header>
          <Content
            className={show === index ? "active" : ""}
            heightContent={heightContent}
            padding={padding}
            fontSize={fontSize}
            customContent={customContent}
          >
            {item.content}
          </Content>
        </AccordionItem>
      ))}
    </>
  );
};
