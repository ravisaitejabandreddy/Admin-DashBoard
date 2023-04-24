import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CheckboxGroup } from ".";
export default {
  title: "molecules/CheckboxGroup",
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
);

export const group = Template.bind({});
group.args = {
  items: [
    {
      label: "Driving while license suspended",
      value: "Driving while license suspended",
    },
    {
      label: "Assault Domestic Violence",
      value: "Assault Domestic Violence",
    },
    {
      label: "Unable to verify employment history at Dunder Mifflin",
      value: "Unable to verify employment history at Dunder Mifflin",
    },
  ],
};
