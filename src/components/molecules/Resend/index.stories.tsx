import Resend from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "molecules/Resend",
  component: Resend,
} as ComponentMeta<typeof Resend>;

const Template: ComponentStory<typeof Resend> = (args) => <Resend {...args} />;

export const ResendOtp = Template.bind({});
ResendOtp.args = {
  message: "Didn't receive the OTP?",
  button: "Resend OTP",
};
