import Signup from ".";
import { ComponentMeta } from "@storybook/react";
export default {
  title: "organisms/Signup",
  component: Signup,
} as ComponentMeta<typeof Signup>;

export const SignupCard = () => <Signup />;
