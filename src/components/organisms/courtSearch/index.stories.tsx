import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CourtSearch } from ".";
export default {
  title: "organisms/CourtSearch",
  component: CourtSearch,
} as ComponentMeta<typeof CourtSearch>;

const Template: ComponentStory<typeof CourtSearch> = (args) => (
  <CourtSearch {...args} />
);
export const search_result = Template.bind({});
search_result.args = {
  data: [
    {
      date: "2/22/2022",
      id: 1,
      search: "SSN Verification",
      status: "CLEAR",
    },
    {
      date: "3/13/2022",
      id: 2,
      search: "Sex Offender",
      status: "CLEAR",
    },
    {
      date: "7/2/2022",
      id: 3,
      search: "Global Watchlist",
      status: "CONSIDER",
    },
    {
      date: "2/20/2022",
      id: 4,
      search: "Federal Criminal",
      status: "CLEAR",
    },
    {
      date: "5/19/2022",
      id: 5,
      search: "County Criminal",
      status: "CLEAR",
    },
  ],
};
