import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState, useEffect } from "react";
import { PaginationTable } from ".";
import { CandidateService } from "../../../service/CandidateService";
import { AdverseTableHeader } from "../adverseActionList/index.styles";
import { Columns } from "../candidatesTable/index.styles";
export default {
  title: "organisms/PaginationTable",
  component: PaginationTable,
} as ComponentMeta<typeof PaginationTable>;
export interface CandidatesType {
  id: number;
  name: string;
  adjudication: string;
  status: string;
  location: string;
  date: string;
}
const Template: ComponentStory<typeof PaginationTable> = (args) => {
  const [candidateList, setCandidateList] = useState([] as CandidatesType[]);
  useEffect(() => {
    CandidateService.ListCandidates().then((res) => {
      const candidates = res.data as CandidatesType[];
      setCandidateList(candidates);
      console.log(res.data);
    });
  }, []);
  return <PaginationTable {...args} candidates={candidateList} />;
};
export const pagination = Template.bind({});
pagination.args = {
  header: Columns,
};
pagination.parameters = {
  backgrounds: { disable: true },
};
const AdverseTemplate: ComponentStory<typeof PaginationTable> = (args) => {
  const [candidateList, setCandidateList] = useState([] as any);
  useEffect(() => {
    CandidateService.ListAdverseActionService().then((res) => {
      const candidates = res.data;
      setCandidateList(candidates);
      console.log(res.data);
    });
  }, []);
  return <PaginationTable {...args} candidates={candidateList} />;
};
export const adverseTable = AdverseTemplate.bind({});
adverseTable.args = {
  candidates: [],
  header: AdverseTableHeader,
};
adverseTable.parameters = {
  backgrounds: { disable: true },
};
