import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LogOutSection } from '.';
import profile from '../../../../public/images/profile.svg';
export default {
  title: 'molecules/LogOutSection',
  component: LogOutSection,
} as ComponentMeta<typeof LogOutSection>;

const Template: ComponentStory<typeof LogOutSection> = (args) => (
  <LogOutSection {...args} />
);
export const logout = Template.bind({});
logout.args = {
  avatar: profile,
  name: 'James Rodriguez',
  caption: 'James.co',
};
