import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TypographyComponent } from '.';

export default {
  title: 'Typography',
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

const Template: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args} />
);

export const h1 = Template.bind({});
h1.args = {
  variant: 'h1',
  children: 'H1',
};
export const h2 = Template.bind({});
h2.args = {
  variant: 'h2',
  children: 'H2',
};
export const body1 = Template.bind({});
body1.args = {
  variant: 'body1',
  children: 'Body1',
};
export const body2 = Template.bind({});
body2.args = {
  variant: 'body2',
  children: 'Body2',
};
export const subtitle1 = Template.bind({});
subtitle1.args = {
  variant: 'subtitle1',
  children: 'SubTitle1',
};
export const caption = Template.bind({});
caption.args = {
  variant: 'caption',
  children: 'Caption',
};
export const caption2 = Template.bind({});
caption2.args = {
  variant: 'caption2',
  children: 'Caption2',
};
