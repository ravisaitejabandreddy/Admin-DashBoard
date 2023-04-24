import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState, useEffect } from "react";
import { CandidatesTable } from ".";
import { CandidateService } from "../../../service/CandidateService";
import { Columns, CourtSearchHeader } from "./index.styles";
export default {
  title: "organisms/CandidatesTable",
  component: CandidatesTable,
} as ComponentMeta<typeof CandidatesTable>;
export interface CandidatesType {
  id: number;
  name: string;
  adjudication: string;
  status: string;
  location: string;
  date: string;
}
const courtSearchTable = [
  {
    id: 1,
    search: "SSN Verification",
    status: "CLEAR",
    date: "2/22/2022",
  },
  {
    id: 2,
    search: "Sex Offender",
    status: "CLEAR",
    date: "3/13/2022",
  },
  {
    id: 3,
    search: "Global Watchlist",
    status: "CONSIDER",
    date: "7/2/2022",
  },
  {
    id: 4,
    search: "Federal Criminal",
    status: "CLEAR",
    date: "2/20/2022",
  },
  {
    id: 5,
    search: "County Criminal",
    status: "CLEAR",
    date: "5/19/2022",
  },
];
const Template: ComponentStory<typeof CandidatesTable> = (args) => {
  const [candidateList, setCandidateList] = useState([] as CandidatesType[]);
  useEffect(() => {
    CandidateService.ListCandidates().then((res) => {
      const candidates = res.data as CandidatesType[];
      setCandidateList(candidates);
      console.log(res.data);
    });
  }, []);
  return <CandidatesTable {...args} candidates={candidateList} />;
};

export const Table = Template.bind({});
Table.args = {
  header: Columns,
};
Table.parameters = {
  backgrounds: { disable: true },
  viewport: {
    defaultViewport: "table",
  },
};
const Template1: ComponentStory<typeof CandidatesTable> = (args) => (
  <CandidatesTable {...args} />
);
export const CourtSearch = Template1.bind({});
CourtSearch.args = {
  header: CourtSearchHeader,
  candidates: courtSearchTable,
};
CourtSearch.parameters = {
  backgrounds: { disable: true },
  viewport: {
    defaultViewport: "courtSearch",
  },
};
