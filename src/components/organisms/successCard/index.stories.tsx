import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SuccessCard } from ".";
export default {
  title: "organisms/SuccessCard",
  component: SuccessCard,
} as ComponentMeta<typeof SuccessCard>;

const Template: ComponentStory<typeof SuccessCard> = (args) => (
  <SuccessCard {...args} />
);
export const success = Template.bind({});
success.args = {
  name: "Pre Advance Action Notice Successfully Sent",
  open: false,
};
