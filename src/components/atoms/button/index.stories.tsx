import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonComponent } from ".";
import LOGOUT from "../../../../public/images/logout.svg";
import ORDER from "../../../../public/images/order.svg";
import Icon from "../Icon";
export default {
  title: "Button",
  component: ButtonComponent,
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    actions: {
      handles: ["mouseover", "click .btn"],
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Text",
};
export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  children: "Contained",
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  children: "Outlined",
};
export const StartIconButton = Template.bind({});
StartIconButton.args = {
  variant: "contained",
  children: "Create Order",
  startIcon: <Icon src={ORDER} alt="order" />,
};
export const EndIconButton = Template.bind({});
EndIconButton.args = {
  variant: "contained",
  children: "Create Order",
  endIcon: <Icon src={ORDER} alt="order" />,
};
export const IconButton = Template.bind({});
IconButton.args = {
  variant: "text",
  startIcon: <img src={LOGOUT} alt="Logout Icon" />,
};

export const pageButton = Template.bind({});
pageButton.args = {
  variant: "text",
  color: "inherit",
  children: "1",
};
