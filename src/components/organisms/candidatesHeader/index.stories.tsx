import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CandidatesListHeader } from ".";
export default {
  title: "organisms/CandidatesListHeader",
  component: CandidatesListHeader,
} as ComponentMeta<typeof CandidatesListHeader>;

const Template: ComponentStory<typeof CandidatesListHeader> = (args) => (
  <CandidatesListHeader {...args} />
);
export const Header = Template.bind({});
Header.args = {
  menu: true,
  group: [
    {
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
      name: "Status",
    },
    {
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
      name: "Adjudication",
    },
  ],
};
export const adverseActionHeader = Template.bind({});
adverseActionHeader.args = {
  menu: false,
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
