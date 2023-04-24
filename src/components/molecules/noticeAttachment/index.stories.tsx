import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NoticeAttachment } from ".";
export default {
  title: "molecules/NoticeAttachment",
  component: NoticeAttachment,
} as ComponentMeta<typeof NoticeAttachment>;

const Template: ComponentStory<typeof NoticeAttachment> = (args) => (
  <NoticeAttachment {...args} />
);
export const Attachment = Template.bind({});
Attachment.args = {
  value: "Summary of right under the FCRA",
};
