import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FilterCandidateButton } from ".";
export default {
  title: "organisms/FilterCandidateButton",
  component: FilterCandidateButton,
} as ComponentMeta<typeof FilterCandidateButton>;

const Template: ComponentStory<typeof FilterCandidateButton> = (args) => (
  <FilterCandidateButton {...args} />
);
export const Filter = Template.bind({});
Filter.args = {
  group: [
    {
      name: "Status",
      checkboxes: [
        {
          label: "All Status",
          value: "allstatus",
        },
        {
          label: "Clear",
          value: "CLEAR",
        },
        {
          label: "Consider",
          value: "CONSIDER",
        },
      ],
    },
    {
      name: "Adjudication",
      checkboxes: [
        {
          label: "All",
          value: "all",
        },
        {
          label: "Engaged",
          value: "engaged",
        },
        {
          label: "Pre adverse action",
          value: "pre adverse action",
        },
      ],
    },
  ],
};

export const AdjudicationFilter = Template.bind({});
AdjudicationFilter.args = {
  group: [
    {
      checkboxes: [
        {
          label: "All Status",
          value: "allstatus",
        },
        {
          label: "Pending",
          value: "pending",
        },
        {
          label: "Scheduled",
          value: "scheduled",
        },
        {
          label: "Dispute",
          value: "dispute",
        },
        {
          label: "Canceled",
          value: "canceled",
        },
        {
          label: "Undeliverable",
          value: "undeliverable",
        },
      ],
      name: "Status",
    },
  ],
};
