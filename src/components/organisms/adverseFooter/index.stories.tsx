import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AdverseFooter } from ".";
export default {
  title: "organisms/AdverseFooter",
  component: AdverseFooter,
} as ComponentMeta<typeof AdverseFooter>;

const Template: ComponentStory<typeof AdverseFooter> = (args) => (
  <AdverseFooter {...args} />
);
export const footer = Template.bind({});
footer.args = {
  days: 7,
  result: true,
  charges: ["Assault Domestic Violence"],
};
