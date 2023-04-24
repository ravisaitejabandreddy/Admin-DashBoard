import { ComponentMeta, ComponentStory } from "@storybook/react";
import eye from "../../../../public/images/eye.svg";
import search from "../../../../public/images/search.svg";
import mail from "../../../../public/images/mail.svg";
import Icon from ".";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  src: search,
  style: {
    height: " 24px",
    width: "24px",
    left: "474px",
    top: "-154px",
    borderRadius: " 0px",
  },
  alt: "Search Icon",
};

export const HiddenIcon = Template.bind({});
HiddenIcon.args = {
  ...SearchIcon.args,
  src: eye,
  alt: "Hidden icon for password",
};

export const MailIcon = Template.bind({});
MailIcon.args = {
  ...SearchIcon.args,
  src: mail,
  alt: "Mail Icon",
};
