import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CandidateScreenHead } from ".";
export default {
  title: "organisms/CandidateScreenHead",
  component: CandidateScreenHead,
} as ComponentMeta<typeof CandidateScreenHead>;

const Template: ComponentStory<typeof CandidateScreenHead> = (args) => (
  <CandidateScreenHead {...args} />
);
export const header = Template.bind({});
header.args = {
  buttons: true,
  name: "John Smith",
  id: "1",
};
