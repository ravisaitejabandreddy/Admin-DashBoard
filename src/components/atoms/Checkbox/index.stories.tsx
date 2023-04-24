import { Checkbox, Typography } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBox from ".";

export default {
  title: "Checkbox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Check = Template.bind({});
Check.args = {
  control: <Checkbox />,
  label: <Typography variant='body1'>I am not robot</Typography>,
  sx: {
    margin: "30px",
  },
  disabled: false,
};
