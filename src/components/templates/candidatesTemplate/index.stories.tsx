import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CandidatesTemplate } from ".";
import { NavBar } from "../../organisms/navbar";
import profile from "../../../../public/images/profile.svg";
import { CandidatesScreenHeader } from "../../organisms/candidatesScreenHeader";
import { CandidateList } from "../../organisms/candidateList";
import { AdverseActionList } from "../../organisms/adverseActionList";
import { NavItems } from "../../organisms/navbar/config";

export default {
  title: "templates/CandidatesTemplate",
  component: CandidatesTemplate,
} as ComponentMeta<typeof CandidatesTemplate>;

const Template: ComponentStory<typeof CandidatesTemplate> = (args) => (
  <CandidatesTemplate {...args} />
);
export const candidates = Template.bind({});
candidates.args = {
  sideNav: (
    <NavBar
      avatar={profile}
      caption="James.co"
      items={NavItems}
      name="James Rodriguez"
      pageId={2}
    />
  ),
  header: <CandidatesScreenHeader buttons name="Candidates" />,
  main: <CandidateList />,
};
export const adverseActions = Template.bind({});
adverseActions.args = {
  sideNav: (
    <NavBar
      avatar={profile}
      caption="James.co"
      items={NavItems}
      name="James Rodriguez"
      pageId={3}
    />
  ),
  header: <CandidatesScreenHeader buttons={false} name="Candidates" />,
  main: <AdverseActionList />,
};
