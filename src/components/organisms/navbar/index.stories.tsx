import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NavBar } from ".";
import profile from "../../../../public/images/profile.svg";
import { NavItems } from "./config";
export default {
  title: "organisms/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;
export const Card = Template.bind({});

Card.args = {
  items: NavItems,
  pageId: 1,
  avatar: profile,
  name: "James Rodriguez",
  caption: "James.co",
};
