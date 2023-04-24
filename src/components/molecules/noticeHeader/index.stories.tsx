import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NoticeHeader } from ".";
export default {
  title: "molecules/NoticeHeader",
  component: NoticeHeader,
} as ComponentMeta<typeof NoticeHeader>;

const Template: ComponentStory<typeof NoticeHeader> = (args) => (
  <NoticeHeader {...args} />
);
export const Header = Template.bind({});
