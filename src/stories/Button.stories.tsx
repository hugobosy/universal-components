import type { Meta, StoryObj } from "@storybook/react";
import { ButtonComponent } from "../components/button/Button.components";

const meta: Meta<typeof ButtonComponent> = {
  title: "Button",
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
  render: (args) => <ButtonComponent {...args} />,
};
