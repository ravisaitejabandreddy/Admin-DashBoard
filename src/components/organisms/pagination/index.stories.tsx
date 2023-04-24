import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PaginationFooter } from ".";
export default {
  title: "organisms/PaginationFooter",
  component: PaginationFooter,
} as ComponentMeta<typeof PaginationFooter>;

const Template: ComponentStory<typeof PaginationFooter> = (args) => (
  <PaginationFooter {...args} />
);
export const Paging = Template.bind({});
Paging.args = {
  indexOfLastPost: 10,
  postsPerPage: 10,
  totalPosts: 19,
};
