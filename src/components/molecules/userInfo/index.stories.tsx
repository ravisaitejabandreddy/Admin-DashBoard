import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserInfo } from '.';
import vector from '../../../../public/images/vector.svg';
export default {
  title: 'molecules/UserInfo',
  component: UserInfo,
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = (args) => (
  <UserInfo {...args} />
);
export const userDetail = Template.bind({});
userDetail.args = {
  icon: vector,
  property: 'Name',
  value: 'John Smith',
};
