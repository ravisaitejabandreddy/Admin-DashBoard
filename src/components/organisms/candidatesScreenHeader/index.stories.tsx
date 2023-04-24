import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CandidatesScreenHeader } from ".";
export default {
  title: "organisms/CandidatesScreenHeader",
  component: CandidatesScreenHeader,
} as ComponentMeta<typeof CandidatesScreenHeader>;

const Template: ComponentStory<typeof CandidatesScreenHeader> = (args) => (
  <CandidatesScreenHeader {...args} />
);
export const header = Template.bind({});
header.args = {
  name: "Candidates",
  buttons: true,
};
