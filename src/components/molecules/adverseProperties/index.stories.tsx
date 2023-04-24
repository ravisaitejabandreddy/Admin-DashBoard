import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AdverseProperties } from ".";
export default {
  title: "molecules/AdverseProperties",
  component: AdverseProperties,
} as ComponentMeta<typeof AdverseProperties>;

const Template: ComponentStory<typeof AdverseProperties> = (args) => (
  <AdverseProperties {...args} />
);
export const properties = Template.bind({});
properties.args = {
  property: "From",
  value: "kyle@checkr.com",
};
