import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PreAdverseAction } from ".";
export default {
  title: "organisms/PreAdverseAction",
  component: PreAdverseAction,
} as ComponentMeta<typeof PreAdverseAction>;

const Template: ComponentStory<typeof PreAdverseAction> = (args) => (
  <PreAdverseAction {...args} />
);
export const card = Template.bind({});
card.args = {
  fromEmail: "kyle@checkr.com",
  toEmail: "john.smith@checkr.com",
  name: "John Smith",
};
