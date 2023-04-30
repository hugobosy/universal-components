import type { Meta, StoryObj } from "@storybook/react";
import { AccordionComponent } from "../components/accordion/Accordion.component";

const meta: Meta<typeof AccordionComponent> = {
  title: "Accordion",
  component: AccordionComponent,
  argTypes: {
    accordionItems: [{ header: "Naglowek", content: "Opis" }],
  },
};

export default meta;
type Story = StoryObj<typeof AccordionComponent>;

export const Primary: Story = {
  render: (args) => (
    <AccordionComponent
      {...args}
      accordionItems={[{ header: "Hej", content: "spierdalaj" }]}
    />
  ),
};
