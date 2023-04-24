import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputAdornment } from "@mui/material";
import EYE from "../../../../public/images/eye.svg";
import SEARCH from "../../../../public/images/search.svg";
import TextField from ".";
import Icon from "../Icon";

export default {
  title: "TextField",
  component: TextField,
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);
export const Email = Template.bind({});
Email.args = {
  placeholder: "Enter Email Address",
  sx: {
    height: "36px",
    width: "384px",
    left: "0px",
    top: "28px",
    borderRadius: "4px",
  },
};

export const Password = Template.bind({});
Password.args = {
  ...Email.args,
  placeholder: "Enter Password",
  type: "password",
  endAdornment: (
    <InputAdornment position="end">
      <Icon src={EYE} alt="hidden icon" />
    </InputAdornment>
  ),
};

export const CandidateSearch = Template.bind({});
CandidateSearch.args = {
  placeholder: "Search any candidate",
  type: "text",
  startAdornment: (
    <InputAdornment position="start">
      <Icon src={SEARCH} alt="hidden icon" />
    </InputAdornment>
  ),
  sx: {
    height: "36px",
    width: "344px",
    top: " 0px",
    borderRadius: "6px",
    padding: "8px 16px ",
  },
};
