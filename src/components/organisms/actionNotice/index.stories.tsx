import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ActionNotice } from ".";
export default {
  title: "organisms/ActionNotice",
  component: ActionNotice,
} as ComponentMeta<typeof ActionNotice>;

const Template: ComponentStory<typeof ActionNotice> = (args) => (
  <ActionNotice {...args} />
);
export const notice = Template.bind({});
notice.args = {
  charges: ["Assault Domestic Violence"],
  fromEmail: "kyle@checkr.com",
  toEmail: "john.smith@checkr.com",
  name: "John",
  disable: true,
};
