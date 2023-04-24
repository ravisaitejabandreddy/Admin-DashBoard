import Signin from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "organisms/Signin",
  component: Signin,
} as ComponentMeta<typeof Signin>;

const Template: ComponentStory<typeof Signin> = (args) => <Signin {...args} />;

export const SigninCard = Template.bind({});
SigninCard.args = {
  forgotButton: "Forgot password",
  checkboxLabel: "Remember me",
  signinButton: "Sign in",
};
