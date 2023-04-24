import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MenuItem } from '.';
import Home from '../../../../public/images/home.svg';
export default {
  title: 'molecules/MenuItem',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const item = Template.bind({});
item.args = {
  src: Home,
  name: 'Home',
  id: 1,
  url: '/',
  pageId: 1,
};
